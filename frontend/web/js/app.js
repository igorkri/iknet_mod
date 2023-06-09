// Меню Бургер
$('#new_header .cont .burger').click(function () {
  $('#new_header .cont .links_drop').slideToggle(300);
});

// Мейн слайдер
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

// Лічильник в блоці реклами
$(document).ready(function () {
  var $element = $('#reclame .counter');
  let counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    var offset = $element.offset().top

    if (scroll > offset && counter === 0) {
      $('#reclame .counter .item h3 span').each(function () {
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

// possibilities 
$('#possibilities .item .info .part2 .right .drop .head').click(function () {
  $(this).siblings('.cont').slideToggle(300);
  if ($(this).find('svg').hasClass('spin')) {
    $(this).find('svg').removeClass('spin');
  } else {
    $(this).find('svg').addClass('spin');
  }
});

// main_news
$('#main_news .news_slider').slick({
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
      breakpoint: 600,
      settings: {
        slidesToShow: 1,

      }
    }
  ]
});

// our_clients
$('#our_clients_slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// possibilities 
$('#career .text .info .vacancy .head').click(function () {
  $(this).siblings('.drop').slideToggle(300);
  if ($(this).find('svg').hasClass('spin')) {
    $(this).find('svg').removeClass('spin');
  } else {
    $(this).find('svg').addClass('spin');
  }
});

// career 
$('#file').change(function () {

  var lang = $('#career').data('lang');
  if(lang === 'en'){
    var sessLang = 'Files selected: ';
    var noFile = 'No file selected';
  }
  if(lang === 'ru'){
    var sessLang = 'Выбрано файлов: ';
    var noFile = 'Файл не выбран';
  }

  if(lang === 'uk'){
    var sessLang = 'Обрано файлів: ';
    var noFile = 'Не вибрано жодного файлу';
  }
  if ($(this).val() != '') $(this).next().text(sessLang + $(this)[0].files.length);
  else $(this).next().text(noFile);
});

// gifts
$('#gifts .block .item').click(function () {
  var filter = $(this).data('filter');
  var id = $(this).data('id');
  var lang = $(this).data('lang');

// console.log(filter);
// console.log(id);

  $.ajax({
    url: "/"+lang+"/gifts/img-gifts",
    type: 'get',
    data: {
      'id': id,
    },
    success: function(data) {
      $('#gifts .dark_bcg').append('<div class="gift_slider" id="gift_slider"></div>');
      $('#gift_slider').append(data);
      $('#gift_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    },
    error: function(data){
      console.log('error', data);
    }
  });
  $('#gifts .dark_bcg').addClass('active');
});

$('#gifts .dark_bcg .close').click(function () {
  $('#gift_slider').slick('unslick');
  $('#gift_slider').remove();
  $('#gifts .dark_bcg').removeClass('active');
});

// news
$('#bookmarks a').click(function () {
  $('#bookmarks a').removeClass('active');
  $(this).addClass('active');
});

