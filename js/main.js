$(document).ready(function() {
	$('.scene').parallax({
	  calibrateX: false,
	  calibrateY: true,
	  invertX: false,
	  invertY: true,
	  limitX: false,
	  limitY: false,
	  scalarX: 2,
	  scalarY: 5,
	  frictionX: 0.2,
	  frictionY: 0.8,
	  originX: 1.0,
	  originY: 0.0
	});


	var $slides = $('#slides-container').find('section');
	var slideCount = $slides.length;
	var nextSlideIndex = 0;

	setInterval(function(){

		var $activeSlide = $slides.filter('.active');

		if(nextSlideIndex < slideCount - 1) {
			nextSlideIndex++;
		} else {
			nextSlideIndex = 0;
		}

		$slides.eq(nextSlideIndex).show();

		$activeSlide.fadeOut(500, function(){
			$activeSlide.removeClass('active');
			$slides.eq(nextSlideIndex).addClass('active');
		});

	}, 5000);

	// var slides = document.getElementById('slides-container').getElementsByTagName('section');

	// function Slideshow(slides) {
	// 	var slidesCount = slides.length,
	// 		slidesInterval,
	// 		currentSlide = 0;

	// 	function nextSlide() {

	// 	}

	// 	slidesInterval = setInterval(nextSlide, 2000);
	// }

});