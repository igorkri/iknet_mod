/**
 * EMA engine AJAX library
 * @namespace EMA
 * @author Illia Sazhko <babai.linux@gmail.com>
 * @version 0.1.1
 * @licence MIT
 */


;(function () {
    var EMA = {};

    /**
     * Debug flag. Set true to printout messages.
     * @memberOf EMA
     * @type {boolean}
     */
    EMA.debug = true;

    /**
     * In this Objcted Stored all system Functions
     * @namespace system
     * @memberOf EMA
     */
    EMA.system = {};

    /**
     * Initiats building Megic Mthods for given class.
     * You can use a shortcut EMA.init()
     *
     * @memberOf EMA.system
     * @function EMA.system.initMagicMethods
     * @param {String} classToCall Class name
     * @param {Boolean} [getXMLModel=true] Build XML Model. Needs additional AJAX query.
     * @returns {jQuery.Deferred} jQuery Deferred object
     */
    EMA.system.initMagicMethods = function (classToCall, getXMLModel) {
        if (getXMLModel === undefined) {
            getXMLModel = true;
        }
        this.model = undefined;
        this.error = false;
        if (classToCall === undefined) {
            throw new TypeError("No argument");
        }

        if (getXMLModel === true) {
            var xmlQueryData = new EMA.system.rpcQueryModel();
            xmlQueryData.action = "getXMLModel";
            xmlQueryData['class'] = classToCall;
            var xmlModelQuery = EMA.system.readData(xmlQueryData);
        }

        var methodsQueryData = new EMA.system.rpcQueryModel();
        methodsQueryData.action = "getAjaxMethods";
        methodsQueryData['class'] = classToCall;
        var methodsQuery = EMA.system.readData(methodsQueryData);

        if (getXMLModel === true) {
            this.objPromise = $.when(xmlModelQuery, methodsQuery);
        } else {
            this.objPromise = $.when(methodsQuery);
        }


        EMA[classToCall] = new Object();
        EMA[classToCall].objPromise = this.objPromise;

        this.objPromise.fail(function () {
            delete (EMA[classToCall]);
        });

        if (getXMLModel === true) {
            this.objPromise.done(function (data1, data2) {
                try {
                    var objectModel = new Object;
                    var xmlDoc = $.parseXML(data1[0]);
                    $.each($(xmlDoc).children("class").children("fields").children("var"), function (index, value) {
                        objectModel[$(value).attr("name")] = new Object();
                        $.each(this.attributes, function () {
                            if (this.specified) {
                                if (this.name === "data-type" && this.value === "JSON") {
                                    objectModel[$(value).attr("name")]['json'] = new Object();
                                    $(xmlDoc).children("class").children("json").children($(value).attr("name")).children("var").each(function () {
                                        var attrObject = new Object();
                                        $.each(this.attributes, function () {
                                            if (this.specified) {
                                                attrObject[this.name] = this.value;
                                            }
                                        });
                                        objectModel[$(value).attr("name")]['json'][$(this).attr("name")] = attrObject;
                                    });
                                } else {
                                    objectModel[$(value).attr("name")][this.name] = this.value;
                                }
                            }
                        });
                    });
                    EMA[classToCall].model = objectModel;
                    $.each($.parseJSON(data2[0]), function (i, val) {
                        EMA[classToCall][val] = function (args) {
                            if (args instanceof FormData) {
                                args.append("action", "standardMethod");
                                args.append("class", classToCall);
                                args.append("method", val);
                                promiseObj = EMA.system.readData(args, false);
                            } else {
                                var queryData = new EMA.system.rpcQueryModel();
                                queryData['class'] = classToCall;
                                queryData.method = val;
                                queryData.arguments = args;
                                promiseObj = EMA.system.readData(queryData);
                            }
                            return promiseObj;
                        }
                    });
                } catch (exp) {
                    EMA.system.printDbgMsg(exp);
                    alert("Incorrect data from server received");
                    delete (EMA[classToCall]);
                }
            });
        } else {
            this.objPromise.done(function (data1) {
                try {
                    $.each($.parseJSON(data1), function (i, val) {
                        EMA[classToCall][val] = function (args) {
                            var queryData = new EMA.system.rpcQueryModel();
                            queryData['class'] = classToCall;
                            queryData.method = val;
                            queryData.arguments = args;
                            promiseObj = EMA.system.readData(queryData);
                            return promiseObj;
                        }
                    });
                } catch (exp) {
                    EMA.system.printDbgMsg(exp);
                    alert("Incorrect data from server received");
                    delete (EMA[classToCall]);
                }
            });
        }

        return this.objPromise;
    };

    /**
     * Prepare AJAX call
     * @memberOf EMA.system
     * @param {Object|FormData} data Data that will be sent over AJAX
     * @param {Boolean} [processData=true] Set to false if you send FormData object.
     * @returns {jQuery.Deferred} jQuery Deferred object
     */
    EMA.system.readData = function (data, processData) {
        if (processData === undefined) {
            processData = true;
        }

        var useNproggress = false;
        if (NProgress !== undefined) {
            useNproggress = true;
        }

        var ajaxOptions = {
            url: "/ajax/",
            type: "POST",
            data: data,
            beforeSend: function () {
                if (useNproggress) {
                    NProgress.start()
                }
            },
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        if (useNproggress) {
                            NProgress.set(percentComplete / 2);
                        }
                    }
                }, false);

                xhr.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        if (useNproggress) {
                            NProgress.set(percentComplete);
                        }
                    }
                }, false);

                return xhr;
            },
            complete: function () {
                if (useNproggress) {
                    NProgress.done();
                }
            }
        };
        if (processData === false) {
            ajaxOptions['processData'] = false;
            ajaxOptions['contentType'] = false;
        }
        var ajaxDefraded = $.ajax(ajaxOptions);

        ajaxDefraded.fail(function (data) {
            if (data.status === 400) {
                alert("Во время обработки данных на сервере проиошла ошибка.\n\
            " + data.responseText + "\
            Попробуйте обновить страницу и попробовать ещё раз.");
            } else if (data.status === 500) {
                alert("Внутрення ошибка сервера.\n\
            " + data.responseText);
            } else {
                alert("Неизвестная ошибка.\n\
            " + data.responseText + " - " + data.status + "\n" + data.statusText);
            }
        });
        return ajaxDefraded;

    };

    /**
     * RPC Query Model
     * @memberOf EMA.system
     * @constructor
     */
    EMA.system.rpcQueryModel = function () {

        /**
         * Callable action name. "standardMethod" by default
         * @type {string}
         */
        this.action = "standardMethod";

        /**
         * Class name to call
         * @type {string}
         */
        this['class'] = "";

        /**
         * Method to call
         * @type {string}
         */
        this.method = "";

        /**
         * Argument for function
         * @type {string|Object}
         */
        this.arguments = "";
    };

    /**
     * Print in console error messages
     * @memberOf EMA.system
     * @param {Error|string} exc
     */
    EMA.system.printDbgMsg = function (exc) {
        if ("debug" in EMA === false || EMA.debug === undefined) {
            return;
        }
        if (exc instanceof Error) {
            console.log("Exception thrown:\n" + exc.name + " : " + exc.message + "\n");
        } else {
            console.log("Debug Msg:\n" + exc + "\n");
        }
    };

    /**
     * Set localization cookie.
     *
     * @memberOf EMA.system
     * @param {string} local
     */
    EMA.system.setLocalization = function(local){
        if(typeof local == "string" && "cookie" in $){
            $.cookie("local", local, {path: "/"});
        }
    };

    /**
     * Removes localization cookie
     */
    EMA.system.removeLocalization = function(){
        if("removeCookie" in $){
            $.removeCookie("local", {path: "/"})
        }
    };


    /**
     * Parsers the form with given ID and returh the object that can be parsed by Magic Mathod
     * Note: this function needs XML model to work properly
     * This function support file input filds and CKEDITOR as textarea replacement.
     *
     * @memberOf EMA
     * @param {string} className
     * @param {string} formID
     * @returns {Object|FormData}
     * @deprecated 0.1.0 EMA.tools.parseFormData
     * @see EMA.tools.parseFormData
     */
    EMA.parseFormData = function (className, formID) {
        return EMA.tools.parseFormData(className, formID);
    };


    /**
     * Validate form with given ID.
     * Note: this function needs XML model to work properly
     * To use localization crate a separate input fields for each localization. Use "_" as separetr beetwen name and localization postfix.
     *
     * @deprecated 0.1.0 Use EMA.tools.validateForm()
     * @memberOf EMA
     * @param {string} className
     * @param {string} formID
     * @param {boolean} [withLocalization=false]
     * @return {boolean}
     * @see EMA.tools.validateForm
     */
    EMA.validateForm = function (className, formID, withLocalization) {
        return EMA.tools.validateForm(className, formID, withLocalization);
    };



    /**
     * In this object you can find different helpfull tools.
     *
     * @memberOf EMA
     * @namespace tools
     */
    EMA.tools = {};

    /**
     * Truncates string to given length.
     *
     * @memberOf EMA.tools
     * @param {string} str
     * @param {int} [len=7]
     * @param {string} [filler="..."]
     * @returns {string}
     */
    EMA.tools.truncateString = function (str, len, filler) {
        if (len === undefined) {
            len = 7;
        }
        if (filler === undefined) {
            filler = "...";
        }
        if (typeof str === "string") {
            if (str.length > len) {
                str = str.substring(0, len);
                str = str + filler;
            }
        }

        return str;
    };

    /**
     * Allow only numaric chars for input element.
     * Add data-isnamonly="true" to any input element on page and call this function.
     *
     * @memberOf EMA.tools
     */
    EMA.tools.appendIsnamonly = function () {
        $('input[data-isnamonly="true"]').each(function (index, element) {
            $(this).keydown(function (e) {
                // Allow: backspace, delete, tab, escape, enter and .
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                        // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                }
                // Ensure that it is a number and stop the keypress
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        });
    };

    /**
     * Return GET parameter with given name.
     *
     * @memberOf EMA.tools
     * @param {string} sParam Parameter Namez
     * @returns {boolean|string}
     */
    EMA.tools.getUrlParameter = function (sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    /**
     * Works like php nl2br function
     *
     * @memberOf EMA.tools
     * @param {string} str
     * @param {boolean} [is_xhtml]
     * @returns {string}
     */
    EMA.tools.nl2br = function (str, is_xhtml) {
        var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
    };

    /**
     * Checks if string is url encoded data.
     *
     * @memberOf EMA.tools
     * @param {string} str
     * @returns {boolean}
     */
    EMA.tools.isDataUrl = function (str) {
        if (typeof str == "string") {
            re = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
            return re.test(str);
        } else {
            return false;
        }
    };

    /**
     * Converts url encoded string to a Blob object
     *
     * @memberOf EMA.tools
     * @param {string} dataURI
     * @returns {Blob}
     */
    EMA.tools.dataURItoBlob = function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type: mimeString});
    };

    /**
     * Validate form with given ID.
     * Note: this function needs XML model to work properly
     * To use localization crate a separate input fields for each localization. Use "_" as separetr beetwen name and localization postfix.
     *
     * @memberOf EMA.tools
     * @param {string} className
     * @param {string} formID
     * @param {boolean} [withLocalization=false]
     * @return {boolean}
     */
    EMA.tools.validateForm = function(className, formID, withLocalization) {
        var model = EMA[className].model;

        var formNode = $("#" + formID);
        if (withLocalization === undefined) {
            withLocalization = false;
        }

        var validateElement = function (model, elementValue) {
            elementError = false;
            if (model.regexp !== undefined) {
                var regexDetectingRegex = /\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|m)?|i(?:gm?|m)?|m(?:gi?|i)?)?)/;
                var regExpArr = regexDetectingRegex.exec(model.regexp);
                if (regExpArr !== null) {
                    var regExpIns = new RegExp(regExpArr[1], regExpArr[2]);
                    if (regExpIns.test(elementValue) === false) {
                        elementError = true;
                    }
                }
            }

            if (model['min-lenght'] !== undefined) {
                if (elementValue.length < model['min-lenght']) {
                    elementError = true;
                }
            }

            if (model['max-lenght'] !== undefined) {
                if (elementValue.length > model['max-lenght']) {
                    elementError = true;
                }
            }

            if (model['min-value'] !== undefined) {
                if (elementValue < model['min-value']) {
                    elementError = true;
                }
            }

            if (model['max-value'] !== undefined) {
                if (elementValue > model['max-value']) {
                    elementError = true;
                }
            }
            if (elementError === true) {
                return false;
            } else {
                return true;
            }
        };

        var validateModel = function (model) {
            var errorDetected = false;
            jQuery.each(model, function (index, value) {
                if (value.json !== null && typeof value.json == "object") {
                    if (validateModel(value.json) === false) {
                        errorDetected = true;
                    }
                }
                var inputNode;
                if (value.localization == "true" && withLocalization === true) {
                    inputNode = EMA.tools.validateForm.findLocalizedInputs(formNode, index);
                } else {
                    inputNode = formNode.find("#" + index);
                }

                $.each(inputNode, function (key, workingNode) {
                    var correctType = false;
                    var nodeType = $(workingNode).attr("type");
                    if (nodeType == "text" || nodeType == "textarea") {
                        correctType = true;
                    }
                    if (correctType) {
                        var elementValue = $(workingNode).val();
                        var elementValid = validateElement(value, elementValue);
                        if (elementValid) {
                            $(workingNode).removeClass("error").addClass("success");
                        } else {
                            $(workingNode).removeClass("success").addClass("error");
                            errorDetected = true;
                        }
                    }

                });

            });

            if (errorDetected === false) {
                return true;
            } else {
                return false;
            }
        };

        return validateModel(model);

    };

    EMA.tools.validateForm.findLocalizedInputs = function (formNode, fieldName) {
        var findNodes = formNode.find("[id^=" + fieldName + "]");
        var re = new RegExp("^" + fieldName + "_([a-zA-Z]{2})$");
        var newNodes = [];
        $.each(findNodes, function (index, value) {
            var nodeId = $(this).attr("id");
            if (re.test(nodeId) === true) {
                newNodes.push(value);
            }
        });
        return newNodes;
    };



    /**
     * Parsers the form with given ID and returh the object that can be parsed by Magic Mathod
     * Note: this function needs XML model to work properly
     * This function support file input filds and CKEDITOR as textarea replacement.
     *
     * @memberOf EMA.tools
     * @param {string} className
     * @param {string} formID
     * @returns {Object|FormData}
     */
    EMA.tools.parseFormData = function(className, formID){
        var isFileAppended = false;

        var model = EMA[className].model;

        var formNode = $("#" + formID);

        if (model === undefined) {
            throw new Error("No Such Class");
        }

        if (formNode.length < 1) {
            throw new Error("No such form");
        }

        var processFormElement = function (index) {
            var isCkeditor = false;
            if (typeof CKEDITOR !== "undefined") {
                if (typeof CKEDITOR.instances[index] === "object") {
                    isCkeditor = true;
                }
            }
            if (isCkeditor === true) {
                inputValue = CKEDITOR.instances[index].getData();
                if (inputValue.length > 0) {
                    return inputValue;
                } else {
                    return false;
                }
            }

            var inputNode = formNode.find("#" + index);
            var nodeType = inputNode.attr("type");
            if (nodeType == "text" || nodeType == "textarea") {

                if (inputNode.length > 0) {
                    var inputValue = inputNode.val();
                    if (inputValue.length > 0) {
                        return inputValue;
                    }
                }
            } else if (nodeType == 'checkbox') {
                if (inputNode.prop("checked") === true) {
                    return "1";
                } else {
                    return "0";
                }
            }

            return false;
        };

        var processFormModel = function (model) {
            var collectedData = {};
            jQuery.each(model, function (index, value) {
                if (value.json !== null && typeof value.json == "object") {
                    jsonCallData = processFormModel(value.json);
                    if (Object.keys(jsonCallData).length > 0) {
                        collectedData[index] = jsonCallData;
                    }
                } else {
                    if (value.file !== undefined && value.file == "true") {
                        var fileNodes = $("#" + index);
                        if (fileNodes.length > 0) {
                            if (fileNodes.attr("type") == "file") {
                                jQuery.each(fileNodes[0].files, function (i, file) {
                                    formData.append(index, file);
                                    isFileAppended = true;
                                });
                            } else if (fileNodes.attr("type") == "text") {
                                var dataUrlStr = fileNodes.val();
                                if (EMA.tools.isDataUrl(dataUrlStr)) {
                                    var blob = EMA.tools.dataURItoBlob(dataUrlStr);
                                    var spliteArray = blob.type.split("/");
                                    formData.append(index, blob, "canvasImage." + spliteArray[1]);
                                    isFileAppended = true;
                                }
                            }

                        }
                    } else {
                        var elemIds = [];
                        if (value.localization == "true") {
                            var localizedNodes = EMA.tools.validateForm.findLocalizedInputs(formNode, index);
                            $.each(localizedNodes, function (key, node) {
                                elemIds.push($(node).attr("id"));
                            });
                        } else {
                            elemIds.push(index);
                        }

                        $.each(elemIds, function (key, id) {
                            var inputValue = processFormElement(id);
                            if (inputValue !== false) {
                                collectedData[id] = inputValue;
                            }
                        });

                    }
                }
            });
            return collectedData;
        };


        var formData = new FormData();
        var processedForm = processFormModel(model);

        if (isFileAppended === true) {
            processedForm = JSON.stringify(processedForm);
            formData.append("arguments", processedForm);
            return formData;
        } else {
            return processedForm;
        }

    };



    /**
     * Builds Magic Methods
     *
     * @global
     * @param classToCall
     * @param getXMLModel
     * @deprecated 0.1.0 Use EMA.system.initMagicMethods() instead.
     * @see EMA.system.initMagicMethods
     */
    function ajaxObjectFactory(classToCall, getXMLModel) {
        return EMA.system.initMagicMethods(classToCall, getXMLModel);
    }

    /**
     * Prepare AJAX query.
     *
     * @global
     * @param data
     * @param processData
     * @returns {*}
     * @deprecated 0.1.0 Use EMA.system.readData() instead.
     * @see EMA.system.readData
     */
    function readData(data, processData) {
        return EMA.system.readData(data, processData);
    }

    /**
     * RPC Query Model
     *
     * @global
     * @deprecated 0.1.0 Use EMA.system.rpcQueryModel() instead.
     * @see EMA.system.rpcQueryModel
     */
    function ajaxDataPort() {
        return EMA.system.rpcQueryModel();
    }

    /**
     * Print debug messegesin console
     *
     * @global
     * @param exc
     * @deprecated 0.1.0 Use EMA.system.printDbgMsg() instead.
     * @see EMA.system.printDbgMsg
     */
    function printDbgMsg(exc) {
        EMA.system.printDbgMsg(exc);
    }

    /**
     * Truncates string to given length.
     *
     *
     * @memberOf EMA
     * @param {string} str
     * @param {int} [len=7]
     * @param {string} [filler="..."]
     * @returns {string}
     * @deprecated 0.1.0 Use EMA.tools.truncateString() instead.
     * @see EMA.tools.truncateString
     */
    EMA.truncateString = function (str, len, filler) {
        return EMA.tools.truncateString(str, len, filler);
    };


    /**
     * Shortcut to EMA.system.initMagicMethods();
     * @function
     * @memberOf EMA
     * @see EMA.system.initMagicMethods
     * @param {String} classToCall Class name
     * @param {Boolean} [getXMLModel=true] Build XML Model. Needs additional AJAX query.
     * @returns {jQuery.Deferred} jQuery Deferred object
     */
    EMA.init = EMA.system.initMagicMethods;

    window.EMA = EMA;


    window.ajaxObjectFactory = EMA.system.initMagicMethods;
    window.readData = EMA.system.readData;
    window.ajaxDataPort = EMA.system.rpcQueryModel;
    window.printDbgMsg = EMA.system.printDbgMsg;

})();



