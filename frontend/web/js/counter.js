!function(t){t.fn.emaCounter=function(){var e=function(t,e,n,r,a){return e==a?n+r:r*(-Math.pow(2,-10*e/a)+1)+n},n=100,r={emaCounterDuration:5e3,emaCounterStart:0,emaCounterTarget:100,emaCounterPostfix:"",emaCounterPrefix:""};return this.each(function(){function a(){if(i>u.emaCounterDuration)return void window.clearInterval(m);var t=e(null,i,u.emaCounterStart,u.emaCounterTarget,u.emaCounterDuration);t=Math.round(t),o.text(u.emaCounterPrefix+t+u.emaCounterPostfix),i+=n}var o=t(this);o.empty();var u=t.extend({},r,o.data()),i=0,m=window.setInterval(a,n);a()})}}(jQuery);