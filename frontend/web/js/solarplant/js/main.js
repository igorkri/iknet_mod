$(function() {

    img_1 = $(".propeller-1-image");
    img_2 = $(".propeller-2-image");
    img_3 = $(".propeller-3-image");


    img_1.css('transform','rotate(20deg)');
    img_2.css('transform','rotate(45deg)');
    img_3.css('transform','rotate(60deg)');

    var angle_1 = 0;
    setInterval(function(){
        angle_1+=3;
        img_1.css('transform','rotate('+angle_1+'deg)');
    },50);

    var angle_2 = 0;
    setInterval(function(){
        angle_2+=6;
        img_2.css('transform','rotate('+angle_2+'deg)');
    },50);

    var angle_3 = 0;
    setInterval(function(){
        angle_3+=10;
        img_3.css('transform','rotate('+angle_3+'deg)');
    },50);

    var light = $(".moving-light");
    var window_1 = $(".window-big-1");
    var window_2 = $(".window-small");
    var window_3 = $(".window-big-2");
    var window_4 = $(".window-medium");

    var arc_params = {
        center: [696,-246],
        radius: 289,
        start: 24,
        end: 332,
        dir: -1
    }

    var arc_params_2 = {
        center: [406,-155],
        radius: 225,
        start: 43,
        end: 345,
        dir: -1
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
            }, 3000);

            $(this).animate({
                path : new $.path.arc(arc_params_2)
            }, 3000);

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

   // $('img').attr('oncontextmenu','return false');


    /*$("#slider").slider({
        value:50,
        min: 14,
        max: 420,
        step: 3,
        slide: function( event, ui ) {
            $( "#square" ).val( ui.value );
            $( "#square").trigger('click');
        }
    });*/

    $( "#square").on('input',function(){
        //$("#slider").slider('value',  $( this ).val());
        $(this).trigger('click');
    });

    setTimeout(function(){ // без этого почемуто надо сперва кликнуть на #square, и только потом смена области меняет тарифы динамически, а если предварительно не кликнуть, а сразу попав на страницу менять область, то цифры не меняются нигда
        $('#square').trigger('click');
    }, 500);

    //$( "#square" ).val($( "#slider" ).slider( "value" ) );



});