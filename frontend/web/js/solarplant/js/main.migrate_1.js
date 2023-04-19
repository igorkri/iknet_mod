$(function() {


    $("#slider").slider({
        value:50,
        min: 14,
        max: 420,
        step: 3,
        slide: function( event, ui ) {
            $( "#square" ).val( ui.value );
            $( "#square").trigger('click');
        }
    });

    $( "#square").on('input',function(){
        $("#slider").slider('value',  $( this ).val());
        $(this).trigger('click');
    });

    setTimeout(function(){ // без этого почемуто надо сперва кликнуть на #square, и только потом смена области меняет тарифы динамически, а если предварительно не кликнуть, а сразу попав на страницу менять область, то цифры не меняются нигда
        $('#square').trigger('click');
    }, 500);

    $( "#square" ).val($( "#slider" ).slider( "value" ) );



});