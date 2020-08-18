$(document).ready(function(){
    // 手機版選單
    var $mobile = $('#mobile') ,
        $toggle = $mobile.find('.toggle') ,
        $menu = $mobile.find('.wrap');
     
    $toggle.click(function(e) {
        $menu.slideToggle()
    });


    if($(window).width() < 991)
    {
      $('.mob_slider').addClass("slider");
    } else {
      $('.mob_slider').removeClass("slider");
    }

    $('.slider').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });

    // $('.section7 .icon').click(function() {
    //   $('.popup').addClass('is-acted');
    // });

    // $('.reserve').click(function() {
    //   $('html,body').animate({scrollTop:$('#section7').offset().top}, 500);}); 
    // });

    $('.slider_popup').slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true
  });
    
  new WOW().init();

});

