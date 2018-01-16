import   'slick-carousel';



$('.js-schedule a').on('click',function(e) {
  e.preventDefault();
  let id = $(this).data('slide');
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');


  $('.js-schedule-slider').slick('slickGoTo', id);
});



$('.js-schedule-slider').slick({
  // infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  focusOnSelect: true,
  arrows: false
});

$('.js-schedule-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  console.log(i + '/' + slick.slideCount);
  $('.js-schedule a').removeClass('is-active');
  $('.js-schedule a').eq(i-1).addClass('is-active');
});


$('.js-people').slick({
  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: '.team-slider__prev',
	  nextArrow: '.team-slider__next'
});


$('.js-photo').each((index,el) => {
  let next = $(el).parent().find('.photo-slider__next');
  let prev = $(el).parent().find('.photo-slider__prev');
  $(el).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prev,
    nextArrow: next
  });
});

$('[data-slider-target]').on('click',function(event) {
  event.preventDefault();
  let id = $(this).data('slider-target');
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');

  $('[data-slider]').hide();
  $('[data-slider='+id+']').show();
});
setTimeout(function() {
  $('[data-slider]').hide();
  $('[data-slider]').eq(0).show();
},100);


$('.js-artists').each((index,el) => {
  let next = $(el).parent().find('.artists-slider__next');
  let prev = $(el).parent().find('.artists-slider__prev');
  $(el).slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prev,
    nextArrow: next
  });
});




$('.js-partners').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '.partners-slider__prev',
  nextArrow: '.partners-slider__next'
});

$('.js-partners').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  let newslide = $(slick.$slides.get(currentSlide));
  let newTitle = newslide.find('.p__title').html();
  let newDescr = newslide.find('.p__descr').html();

  $('.currentp__title').text(newTitle);
  $('.currentp__descr').text(newDescr);
});


$(window).on('scroll',function() {
  let st = $(window).scrollTop();
  if(st>100) {
  	$('.header').addClass('is-fixed');
  } else{
  	$('.header').removeClass('is-fixed');
  }
});
