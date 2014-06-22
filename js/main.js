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


	var $slides = $('#slides-container').find('section'),
		slideCount = $slides.length,
		nextSlideIndex = 0,
		$activeSlide = $('section.active');

		$('.next').on('click', function(){
			
			$activeSlide.removeClass('active');			
			if(nextSlideIndex < slideCount - 1) {
				nextSlideIndex++;
			} else {
				nextSlideIndex = 0;
			}

			$slides.eq(nextSlideIndex).addClass('active');
			$activeSlide = $slides.eq(nextSlideIndex);
		});

		$('.prev').on('click', function(){
			
			$activeSlide.removeClass('active');			
			if(nextSlideIndex === 0 ) {
				nextSlideIndex = (slideCount - 1);
			} else {
				nextSlideIndex--;
			}

			$slides.eq(nextSlideIndex).addClass('active');
			$activeSlide = $slides.eq(nextSlideIndex);
		});

});