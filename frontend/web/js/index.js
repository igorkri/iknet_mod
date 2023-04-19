
$("#search-input").keyup(function (t) {
  var e = $(this).val();
  13 == t.keyCode && e.length > 0 && (window.location = "/" + window.currentLocal + "/search?q=" + encodeURIComponent(e))
});
$('#city-box .city').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});
$('#city-box .city-list').on('click', 'img', function () {
  var $set_img = $('#city-box .city-list img');
  var $img = $set_img.index(this);
  var $dot = $('#city-box .city .slick-dots li');
  $($dot[$img]).trigger('click');
});
$(document).ready(function () {
  var $element = $('#couners-wrapper');
  let counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    var offset = $element.offset().top

    if (scroll > offset && counter == 0) {
      $('#couners-wrapper .animated-counter').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      counter = 1;
    }
  });
});

$('#new_header .cont .burger').click(function () {
  $('#new_header .cont .links_drop').slideToggle(300);
});

$('#new_header .cont .links_drop .links .developable .name').click(function () {
  $('#new_header .cont .links_drop .links .developable .name').not(this).siblings('.drop').removeClass('active');
  $(this).siblings('.drop').addClass('active');
});

$('#new_header .cont .links_drop .links .developable .drop .back').click(function () {
  $('#new_header .cont .links_drop .links .developable .drop').removeClass('active');
});

$('#our-client-list .our-client-list').slick({
  dots: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 6000,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
});

// $('#our-client-list .our-client-list').slick({
//   dots: false,
//   arrows: false,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   autoplay: true,
//   autoplaySpeed: 6000,
//   lazyLoad: 'ondemand',
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       }
//     },
//     {
//       breakpoint: 360,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// });
// $('#career .info .vacancies .item').click(function () {
//   $(this).find('.drop').slideToggle(500);
// });
$('#news_slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
$("#search-input").keyup(function (t) {
  var e = $(this).val();
  13 == t.keyCode && e.length > 0 && (window.location = "/" + window.currentLocal + "/search?q=" + encodeURIComponent(e))
});
$('#city-box .city').slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});
$('#city-box .city-list').on('click', 'img', function () {
  var $set_img = $('#city-box .city-list img');
  var $img = $set_img.index(this);
  var $dot = $('#city-box .city .slick-dots li');
  $($dot[$img]).trigger('click');
});
$(document).ready(function () {
  var $element = $('#couners-wrapper');
  let counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    var offset = $element.offset().top

    if (scroll > offset && counter == 0) {
      $('#couners-wrapper .animated-counter').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      counter = 1;
    }
  });
});


// $('#new_header .cont .burger').click(function () {
//   $('#new_header .cont .links_drop').slideToggle(300);
// });
//
// $('#new_header .cont .links_drop .links .developable .name').click(function () {
//   $('#new_header .cont .links_drop .links .developable .name').not(this).siblings('.drop').removeClass('active');
//   $(this).siblings('.drop').addClass('active');
// });
//
// $('#new_header .cont .links_drop .links .developable .drop .back').click(function () {
//   $('#new_header .cont .links_drop .links .developable .drop').removeClass('active');
// });


$('#career .info .vacancies .item').click(function () {
  $(this).find('.drop').slideToggle(500);
});



$('#gift_slider').slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1

});

$(function () {
  $('#gift_slider').height($('#gift_slider').width());
});

$('#gifts .block .item').click(function () {
  $('#gifts .dark_bcg').addClass('active');
});

$('#gifts .dark_bcg .close').click(function () {
  $('#gifts .dark_bcg').removeClass('active');
});

$('#gifts .block .item').click(function () {
  var $set_item = $('#gifts .block .item');
  var $item = $set_item.index(this);
  var $dot = $('#gift_slider .slick-dots li');
  $($dot[$item]).trigger('click');
});
// $('#gift_slider').slick({
//   dots: true,
//   arrows: true,
//   slidesToShow: 1,
//   slidesToScroll: 1
// });