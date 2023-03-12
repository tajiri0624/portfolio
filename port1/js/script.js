jQuery(function ($) {

  $('.js-hamburger').on('click',function(){
    if ($(this).hasClass('open')) {
      // ドロワーメニューが開いている
      $('.js-drawer').fadeOut();
      $(this).removeClass('open');
      $('html').removeClass('fixed')
      $('.hamburger').css('background-color','#DF8686')
      $('.hamburger p').css('color','white')
      $('.hamburger span').css('background-color','white')
      $('.hamburger p').text('menu')
    } else {
      //ドロワーが閉じている
      $('.js-drawer').fadeIn();
      $(this).addClass('open');
      $('html').addClass('fixed')
      $('.hamburger').css('background-color','white')
      $('.hamburger p').css('color','#DF8686')
      $('.hamburger span').css('background-color','#DF8686')
      $('.hamburger p').text('close')
    }
  });
  // mvのスライダー
  $('.mv-slider').slick({
    fade:true,
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000,
    Infinity:true,
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow: '<div class="mv-slick-prev"></div>',
		nextArrow: '<div class="mv-slick-next"></div>',
  })

  // cafemenu-tab
  function GethashID (hashIDName){
    if(hashIDName){
      $('.tab li').find('a').each(function(){
        var idName = $(this).attr('href');
        if(idName == hashIDName){
          var parentElm = $(this).parent();
          $('.tab li').removeClass("active");
          $(parentElm).addClass("active");

          $(".area").removeClass("is-active");
          $(hashIDName).addClass("is-active");
        }
      });
    }
  }
  // クリックしたら
  $('.tab a').on('click',function(){
    var idName=$(this).attr('href');
    GethashID (idName);
    return false;
  });
  $(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); 
    $('.area:first-of-type').addClass("is-active"); 
    var hashName = location.hash; 
    GethashID (hashName);
  });


  // lookrose
  $(window).on('load resize',function() {
    if(window.matchMedia("(max-width:767px)").matches){
      // ウインドウサイズが768px以下の場合
      $('.js-lookrose-slider').slick({
        fade:true,
        autoplay:true,
        autoplaySpeed:3000,
        speed:1000,
        Infinity:true,
        slidesToShow:1,
        slidesToScroll:1,
        prevArrow: '<div class="mv-slick-prev"></div>',
        nextArrow: '<div class="mv-slick-next"></div>',
        dots:true,
      })
    }else{
      // ウインドウサイズが768px以上の場合
      $('.js-lookrose-slider').slick({
        autoplay:true,
        Infinity:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        centerMode: true,
        variableWidth: true,
        dots: true,
      })
    }
  }); 

  // question-accordion
  $('.question-accordion-title').on('click',function(){
    var findElm = $(this).next(".js-accordion-box");
    $(findElm).slideToggle();
    if($(this).hasClass('close')){
      $(this).removeClass('close');
    }else{
      $(this).addClass('close');
    }
  });

  

  // page-top-btn

  $(window).scroll(function(){
    PageTopAnime();
  });

  function PageTopAnime(){
    var scroll = $(window).scrollTop();
    if(scroll>=200){
      $('.js-page-top').removeClass('DownMove');
      $('.js-page-top').addClass('UpMove');
    }else{
      if($('.js-page-top').hasClass('UpMove')){
        $('.js-page-top').removeClass('UpMove');
        $('.js-page-top').addClass('DownMove')
      }
    }
  }
});