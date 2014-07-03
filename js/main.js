

	// var $slides = $('#slides-container').find('section'),
	// 	slideCount = $slides.length,
	// 	nextSlideIndex = 0,
	// 	$activeSlide = $('section.active');

	// 	// LOGIC TO CHANGES SLIDES MANUALLY USING PREV AND NEXT BUTTONS

	// 	if ($('#slider-nav').length > 0) {
	// 		$('.next').on('click', function(){
			
	// 			$activeSlide.removeClass('active');			
	// 			if(nextSlideIndex < slideCount - 1) {
	// 				nextSlideIndex++;
	// 			} else {
	// 				nextSlideIndex = 0;
	// 			}

	// 			$slides.eq(nextSlideIndex).addClass('active');
	// 			$activeSlide = $slides.eq(nextSlideIndex);
	// 		});

	// 		$('.prev').on('click', function(){
				
	// 			$activeSlide.removeClass('active');			
	// 			if(nextSlideIndex === 0 ) {
	// 				nextSlideIndex = (slideCount - 1);
	// 			} else {
	// 				nextSlideIndex--;
	// 			}

	// 			$slides.eq(nextSlideIndex).addClass('active');
	// 			$activeSlide = $slides.eq(nextSlideIndex);
	// 		});

	// 	// LOGIC FOR SLIDES TO FADE OUT AUTOMATICALLY WITHOUT THE ARROWS
	// 	} else {

	// 		setInterval(function() {
		
	// 			$activeSlide.removeClass('active');			
	// 			if(nextSlideIndex < slideCount - 1) {
	// 				nextSlideIndex++;
	// 			} else {
	// 				nextSlideIndex = 0;
	// 			}
	// 			$slides.eq(nextSlideIndex).addClass('active');
	// 			$activeSlide = $slides.eq(nextSlideIndex);
	// 			// CHANGE TIMING FOR EACH SLIDE HERE
	// 		}, 3000);
	// 	}

		

});