$(function(){


	//scrollBtn quick
	$('.btBtn area').bind('click',function(){
		var depId = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(depId).offset().top}, 800, 'easeInOutExpo' );
	});

	var scrollBtn = function() {
		var winWidth = $(window).width();
		var $tmp = $(window).scrollTop();
		var $topImgH = $('.bgH');
		if (winWidth > 900) {
			var widCheck = 700;
		} else if (winWidth < 901 && winWidth > 540){ var widCheck = 250;
		} else {var widCheck = 180;}

		var $target = $topImgH.outerHeight() - widCheck;

		console.log($topImgH.outerHeight());
		if ($tmp < $target){
			$('.btBtn').fadeIn(300);
		} else {
			$('.btBtn').fadeOut(300);
		}
	}
	$(window).scroll(function() {
		scrollBtn();
	});
  
});
