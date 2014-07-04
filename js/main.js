       $(document).ready(function() {
        $('.banner').show().revolution(
        {
            dottedOverlay:"none",
            delay:3000,
            startwidth:1170,
            startheight:700,
            hideThumbs:200,
            
            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:5,
            
            navigationType:"bullet",
            
            touchenabled:"on",
            onHoverStop:"on",
            
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
                                    
            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[1,0],
                                    
            keyboardNavigation:"off",
            
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,
                    
            shadow:0,
            fullWidth:"on",
            fullScreen:"on",

            spinner:"spinner4",
            
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,

            shuffle:"off",
            
            autoHeight:"off",                       
            forceFullWidth:"on",                       
                                    
                                                                        
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,                      
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,
            
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            videoJsPath:"rs-plugin/videojs/",
            fullScreenOffsetContainer: ""   
        });
     
       });

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
