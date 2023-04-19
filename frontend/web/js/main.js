$(function() {

    function AnimateFooter(option) {

        var el = option.element;
        var light = $(".moving-light", el);
        var window_1 = $(".window-big-1", el);
        var window_2 = $(".window-small", el);
        var window_3 = $(".window-big-2", el);
        var window_4 = $(".window-medium", el);
        var frsInt = 3000;
        var scnInt = 3000;


        var arc_params = {
            center: [696,-246],
            radius: 289,
            start: 24,
            end: 332,
            dir: -1
        };

        var arc_params_2 = {
            center: [406,-155],
            radius: 225,
            start: 43,
            end: 345,
            dir: -1
        };

        img_1 = $(".propeller-1-image", el);
        img_2 = $(".propeller-2-image", el);
        img_3 = $(".propeller-3-image", el);


        this.runAnimation = function() {

            var angle_1 = 0;
            var angle_2 = 0;
            var angle_3 = 0;
            //img_1.rotate(30);
            //img_2.rotate(45);
            //img_3.rotate(60);

            setInterval(function(){
                angle_1+=3;
                img_1.rotate(angle_1);
            },50);

            setInterval(function(){
                angle_2+=6;
                img_2.rotate(angle_2);
            },50);

            setInterval(function(){
                angle_3+=10;
                img_3.rotate(angle_3);
            },50);

            var width = $(window).width();

            if (width < 1001) {
                arc_params = {
                    center: [301,-246],
                    radius: 289,
                    start: 24,
                    end: 340,
                    dir: -1
                };

                frsInt = 6000;
                scnInt = 0;
            }

            window_1.animate({
                opacity: 0
            }, 0);
            window_2.animate({
                opacity: 0
            }, 0);
            window_3.animate({
                opacity: 0
            }, 0);
            window_4.animate({
                opacity: 0
            }, 0);

            setInterval(function(){

                light.queue(function(){
                    $(this).animate({
                        opacity: 1
                    }, 0);

                    $(this).animate({
                        path : new $.path.arc(arc_params)
                    }, frsInt);

                    $(this).animate({
                        path : new $.path.arc(arc_params_2)
                    }, scnInt);

                    $(this).animate({
                        opacity: 0
                    }, 0, function(){
                        window_1.animate({
                            opacity: 1
                        }, 500, function(){
                            window_2.animate({
                                opacity: 1
                            }, 500, function(){
                                window_3.animate({
                                    opacity: 1
                                }, 500, function(){
                                    window_4.animate({
                                        opacity: 1
                                    }, 500, function(){
                                        window_1.animate({
                                            opacity: 0
                                        }, 2000);
                                        window_2.animate({
                                            opacity: 0
                                        }, 2000);
                                        window_3.animate({
                                            opacity: 0
                                        }, 2000);
                                        window_4.animate({
                                            opacity: 0
                                        }, 2000);
                                    });
                                })
                            });
                        });
                    });
                    $(this).dequeue();
                });

            }, 200);
        };

        this.runAnimation();

    }

    var anFooter = new AnimateFooter({
        element: $(".footer-top-bg")
    });

    //$(window).on("resize", function() {
    //  window.location.reload();
    //});
});

jQuery(function($) {
  var el = $('#review-list');
  el.data('bxslider', el.bxSlider({
    pager: true,
    controls: false,
    auto: true,
    pause: 7000,
    autoHover: true
  }));
});


$(document).ready(function(){
    $("#search-input").keyup(function(event){
        var queryString = $(this).val();
        if(event.keyCode == 13 && queryString.length > 0){
            window.location = "/"+ window.currentLocal + "/search/?q=" + encodeURIComponent(queryString);
        }
    });

  var elem = $("#slogans"),
    s1 = $(".s1", elem),
    s2 = $(".s2", elem),
    s3 = $(".s3", elem);

  function animateSlogans() {
    s2.animate({
      opacity: 1
    }, 8000, "linear", function() {
      s2.animate({ opacity: 0 }, 3000, "linear", function(){});

      s3.animate({
        opacity: 1
      }, 8000, "linear", function() {
        s3.animate({ opacity: 0 }, 3000, "linear", function(){});

        s1.animate({
          opacity: 1
        }, 8000, "linear", function() {
          s1.animate({ opacity: 0 }, 3000, "linear", function(){});

        });

      });

    });
  }
  $("#our-client-list").bxSlider({
    minSlides: 5,
    maxSlides: 5,
    slideWidth: 234,
    pager: false,
    auto: true
  });
  animateSlogans();

  setInterval(animateSlogans, 33000);


    (function(){
        var contactFormNode = $(".wpcf7-form");



        if(contactFormNode.length > 0){
            var contactForm  = $.extend(true, {}, window.contactForm);
            contactForm.node = contactFormNode;
            contactForm.formData = {};
            contactForm.lastError = "";


            if(currentLocal == "ru" || currentLocal == "uk"){
                contactFormNode.find('input[name="Phone"]').mask("+38 (099) 99-99-999");
            } else {
                contactFormNode.find('input[name="Phone"]').mask("+380 (99) 99-99-999");
            }

            contactForm.node.find('input[type="text"], textarea').each(function(){
                $(this).change(function(){
                    $(this).removeClass("invalid")
                });
            });

            contactForm.validate = function(){
                var errorDetected = false;
                var formData = {};
                var emailRe = /^.*@.*\..*$/;

                contactForm.formData = {};
                contactForm.lastError = "";

                contactForm.node.find('input[type="text"], textarea').each(function(){
                    var currentInst = $(this);
                    var name = currentInst.attr("name");
                    var localizedName = currentInst.attr("placeholder");
                    var value = currentInst.val();
                    var prefix = "";

                    if(currentLocal == "en"){
                        prefix = "Your ";
                    }
                    switch (name) {
                        case "Name":
                        case "Message":
                            if(value.length < 3){
                                errorDetected = true;
                                contactForm.lastError += prefix + localizedName + " "+contactForm.localization.lessSymbols+"\n\r";
                                currentInst.addClass("invalid");
                            }
                            break;
                        case "Phone":
                            if(value.length < 19){
                                errorDetected = true;
                                contactForm.lastError += prefix + localizedName + " "+contactForm.localization.invalid+"\n\r";
                                currentInst.addClass("invalid");
                            }
                            break;
                        case "E-mail":
                            if(emailRe.test(value) === false){
                                errorDetected = true;
                                contactForm.lastError += prefix + localizedName + " "+contactForm.localization.invalid+"\n\r";
                                currentInst.addClass("invalid");
                            }
                    }
                    formData[name] = value;
                });

                if(errorDetected === false){
                    contactForm.formData = formData;
                    return true;
                } else {
                    return false;
                }
            };

            contactForm.clean = function(){
                contactForm.node.find('input[type="text"], textarea').each(function(){
                    $(this).val("").removeClass("invalid");
                });
            };

            contactForm.node.submit(function(e){
                e.preventDefault();
                e.stopPropagation();

                if(contactForm.validate()){
                    var data = {};
                    data.action = "standardMethod";
                    data['class'] = "SiteFormNotify";
                    data.method = "sendNotify";
                    data.arguments = contactForm.formData;

                    var ajaxDefraded = $.ajax({
                        url: "/ajax/",
                        type: "POST",
                        data: data
                    });
                    ajaxDefraded.done(function(data){
                        var serverResponse = $.parseJSON(data);
                        if(serverResponse === true){
                            contactForm.clean();
                            alert(contactForm.localization.successText);
                        } else {
                            alert(contactForm.localization.errorText);
                        }
                    });

                    ajaxDefraded.fail(function (data) {
                        alert(contactForm.localization.errorText);
                    });
                } else {
                    alert(contactForm.lastError);
                }

            });
            window.contactForm = contactForm;
        }
    })();
});

