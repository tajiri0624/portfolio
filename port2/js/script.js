jQuery(function ($) {
    // ヘッダー
  $('.js-hamburger').on('click',function(){
    if ($(this).hasClass('open')) {
      // ドロワーが開いている
      $('.js-drawer').fadeOut();
      $(this).removeClass('open');
      $('html').removeClass('fixed')
      $('.header-rogo img').attr('src','./img/logo_black.svg')
      $('.hamburger').css('background-color','#202925')
      $('.hamburger span').css('background-color','#E2E2E2')
    }else{
      // ドロワーが閉じているとき
      $('.js-drawer').fadeIn();
      $(this).addClass('open');
      $('html').addClass('fixed')
      $('.header-rogo img').attr('src','./img/logo_white.svg')
      $('.hamburger').css('background-color','#E2E2E2')
      $('.hamburger span').css('background-color','#000000')
    }
  })

  // メニューヘッダ-
  $('.sub-js-hamburger').on('click',function(){
    if ($(this).hasClass('open')) {
      // ドロワーが開いている
      $('.sub-js__drawer').fadeOut();
      $(this).removeClass('open');
      $('html').removeClass('fixed')
    }else{
      // ドロワーが閉じているとき
      $('.sub-js__drawer').fadeIn();
      $(this).addClass('open');
      $('html').addClass('fixed')
    }
  })


   // newsアコーディオン
   $('.news-title__box').on('click',function(){
    $('.news-text__box').slideUp(500);
    var findElm = $(this).next('.news-text__box');
    if($(this).hasClass('close')){
      $(this).removeClass('close');
    }else{
      $('.close').removeClass('close');
      $(this).addClass('close');
      $(findElm).slideDown(500);
    }
  });


  $(window).on('load resize',function() {
    if(window.matchMedia("(max-width:767px)").matches){
      // ウインドウサイズが768px以下の場合
      $('.menu-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6900,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
      })
      $('.sub-mv__slider').not('.slick-initialized').slick({
          //スライドさせる
          arrows: false,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 6900,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          cssEase: 'linear',
          slidesToShow: 2,
          slidesToScroll: 1,
        });
    }else{
      // ウインドウサイズが768px以上の場合
      $('.menu-slider').slick('unslick');
      $('.sub-mv__slider').not('.slick-initialized').slick({
        //スライドさせる
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6900,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
      });
    }
  }); 

});