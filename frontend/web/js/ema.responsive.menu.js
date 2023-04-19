/**
 * jQuery responsive menu plugin
 * @version 0.1.0
 */


'use strict';

(function( $ ){

    $.fn.emaRespMenu = function( options ){
        if(this.length === 0){
            throw new Error("No wrapper element selected");
        }
        this.hide();
        this.emaRespMenu['settings'] = $.extend(true, {}, $.fn.emaRespMenu.defaults, options);

        this.emaRespMenu['$activateIcon'] = $(this.emaRespMenu.settings.activateIconSelector);
        this.emaRespMenu['$activateIcon'].click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if(isOpened.call(this)){
                this.emaRespMenu.close();
            } else {
                this.emaRespMenu.open();
            }
        }.bind(this));

        function isMatchMedia(){
            return window.matchMedia("(max-width: " + this.emaRespMenu.settings.maxWidth+"px)").matches
        }

        function isOpened(){
            return (this.css("display") == "block");
        }

        function appendUniqueIndexses(data){
            var i = 0;
            function append(children){
                var currentArray = [];
                $.each(children, function(index, item){
                    i++;
                    var currentElement = {
                        value: item.value,
                        uniqueId: i
                    };
                    if("children" in item){
                        currentElement['children'] = append(item.children);
                    }

                    currentArray.push(currentElement);

                });
                return currentArray;
            }
            return append(data);
        }

        function findItemByUniqueId(uniqueId){

            var currentParent = "root";
            function search(data){

                for(var i = 0; i < data.length; i++){
                    var currentObj = data[i];
                    if("uniqueId" in currentObj && currentObj.uniqueId == uniqueId){
                        return currentObj;
                    }
                    if("children" in currentObj){
                        var previousParent = currentParent;
                        currentParent = currentObj.uniqueId;
                        var returned = search(currentObj.children);
                        if(typeof returned == "object"){
                            return returned;
                        } else {
                            currentParent = previousParent;
                        }
                    }
                }

            }
            var searchResults = search(this.emaRespMenu.settings.data);
            if(typeof searchResults == "object"){
                searchResults['parentId'] = currentParent;
            }
            return searchResults;
        }

        function hideOnResize(e){

            if (isMatchMedia.call(this)) {
                this.emaRespMenu.$activateIcon.show();
                console.log(e);
                if(this.emaRespMenu.settings.closeOnResize) {
                    this.emaRespMenu.close();
                }
            }else{
                this.emaRespMenu.$activateIcon.hide();
                this.emaRespMenu.close();
            }
        }

        function generateHtml(data, previousId){
            var html = "<ul>";

            if(previousId !== undefined){
                html += "<li><a href='#back' class='back-bnt' data-unique-id='"+previousId
                    +"'><span>"+this.emaRespMenu.settings.backButtonText
                    +"</span></a></li>"
            }

            $.each(data, function(index, item){
                var target = "";
                if("target" in item['value']){
                    target = " target='"+item['value'].target+"' ";
                }

                var appendedClasses = "";
                if("children" in item){
                    appendedClasses += " has-children ";
                }

                html += "<li><a href='"+item['value']['link']+"' class='"+appendedClasses+"' "+target+"" +
                    "data-unique-id='"+item['uniqueId']+"'><span>"+item['value']['name']+"</span></a></li>"
            });
            html += "</ul>";
            return html;
        }

        function appendItemActions(){
            this.find("a.has-children, a.back-bnt").each(function(index, elem){
                $(elem).click(function(e){
                    e.preventDefault();
                    this.emaRespMenu.swithOnTo($(e.currentTarget).data("unique-id"));
                }.bind(this));
            }.bind(this));
        }

        function getCssOutOfScreen(){
            var cssObj = {};
            cssObj[this.emaRespMenu.settings.animationType] = getOffScreenOffset.call(this) +"px";
            return cssObj;
        }

        function getOffScreenOffset() {
            if (this.emaRespMenu.settings.animationType == "left") {
                return -Math.abs(window.innerWidth);
            } else {
                var height;
                var wasHiden = false;
                if (!isOpened.call(this)) {
                    wasHiden = true;
                    this.show();
                }
                height = this.height();
                if (wasHiden === true) {
                    this.hide();
                }
                return -Math.abs(height);
            }
        }

        function getAnimationPropOnScreen(){
            var animObject = {};
            animObject[this.emaRespMenu.settings.animationType] = "0";
            return animObject;
        }

        function getAnimationPropOffScreen(){
            var animObject = {};
            animObject[this.emaRespMenu.settings.animationType] = getOffScreenOffset.call(this);
            return animObject;
        }


        
        
        this.emaRespMenu.open = function(){
            if(isMatchMedia.call(this)){
                this.emaRespMenu.settings.onOpen.call(this);
                this.emaRespMenu.swithOnTo();
                this.css(getCssOutOfScreen.call(this)).animate(getAnimationPropOnScreen.call(this),
                    this.emaRespMenu.settings.animationDuration);

                this.show();
            }
        }.bind(this);

        this.emaRespMenu.close = function(){
            this.emaRespMenu.settings.onClose.call(this);
            this.animate(getAnimationPropOffScreen.call(this),
                {
                    duration: this.emaRespMenu.settings.animationDuration,
                    complete: function(){
                        this.children().remove();
                        this.hide();
                    }.bind(this)
                });


        }.bind(this);

        this.emaRespMenu.swithOnTo = function(uniqueId){
            this.children().remove();
            if(isNaN(parseInt(uniqueId))){
                this.append(generateHtml.call(this, this.emaRespMenu.settings.data));
            } else {
                var node = findItemByUniqueId.call(this, uniqueId);
                if(typeof node == "object" && "children" in node){
                    this.append(generateHtml.call(this, node.children, node.parentId));
                }
            }
            appendItemActions.call(this);
        }.bind(this);

        this.emaRespMenu.settings.data = appendUniqueIndexses(this.emaRespMenu.settings.data);

        $(window).resize(function(e){
            hideOnResize.call(this, e);
        }.bind(this));


        if(this.emaRespMenu.settings.closeOnOutsideClick){
            $(document).mouseup(function(e){
                if (isMatchMedia.call(this)) {
                    if(isOpened.call(this)) {
                        if($(e.target).parents(this.selector).length == 0){
                            this.emaRespMenu.close();
                        }
                    }
                }
            }.bind(this));
        }

        return this;
    };

    $.fn.emaRespMenu.defaults = {
        activateIconSelector: "#navabar-resp-icon",
        maxWidth: 900,
        animationDuration: 500,
        backButtonText: "Back",
        closeOnResize: true,
        closeOnOutsideClick: true,
        animationType: "left", /* "left" and "top" are sported */
        data: [],
        onOpen: function(){},
        onClose: function(){}
    };

}( jQuery ));