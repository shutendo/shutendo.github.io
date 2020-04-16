/** Add any JavaScript you need to this file. */
$('.slider-one')
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplayspeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
  });

  $('.slider-two')
.not(".slick-intialized")
.slick({
    
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
  });