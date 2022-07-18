$(document).ready(function(){
	$('.header-slider').bxSlider();
});

$
('.item-slider').bxSlider({
	auto: true,
	controls: false,
  pager: true,
  slideWidth: 400,
	speed: 700,
});

$
('.lable').bxSlider({
	speed:700 ,
	minSlides: 1,
	maxSlides: 12,
	moveSlides: 0,
	slideWidth: 0,
	shrinkItems:false,
});