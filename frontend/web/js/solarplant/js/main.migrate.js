$(function(){$("#slider").slider({value:50,min:14,max:420,step:3,slide:function(event,ui){$("#square").val(ui.value);$("#square").trigger('click')}});$("#square").on('input',function(){$("#slider").slider('value',$(this).val());$(this).trigger('click')});setTimeout(function(){$('#square').trigger('click')},500);$("#square").val($("#slider").slider("value"))});