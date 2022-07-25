$(document).ready(function(){
	$('.header-slider').bxSlider({
		speed: 1000 ,
	});
});

$
('.item-slider').bxSlider({
	auto: true,
	controls: false,
  pager: true,
  slideWidth: 400,
	speed: 1200,
});

$
('.lable').bxSlider({
	speed:1000 ,
	minSlides: 1,
	maxSlides: 3,
	moveSlides: 3,
	slideWidth: 0,
	shrinkItems:false,
});