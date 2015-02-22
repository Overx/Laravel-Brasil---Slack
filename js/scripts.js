(function($){
	$(document).ready( function(){
		$.backstretch('images/bg1.jpg');
	});	
	
	$(window).on('load', function(){
		$('.fade-in').css({ position: 'relative', opacity: 0, top: -14 });
		setTimeout(function(){
			$('#preload-content').fadeOut(400, function(){
				$('#preload').fadeOut(800);
				setTimeout(function(){
					$('.fade-in').each(function(index) {
						$(this).delay(400*index).animate({ top : 0, opacity: 1 }, 800);
					});
				}, 800);
			});
		}, 400);
	});
	
})(jQuery);