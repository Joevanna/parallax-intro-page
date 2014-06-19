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

	var slides = document.getElementById('slides-container').getElementsByTagName('section');

	function Slideshow(slides) {
		var slidesCount = slides.length,
			slidesInterval,
			currentSlide = 0;

		function nextSlide() {

		}

		slidesInterval = setInterval(nextSlide, 2000);
	}

});