function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}

$(function(){
	
	
	$('#carousel-intro').carousel({interval: false});
	
 	$('#carousel-intro').on('swiperight', function(e){
		$('#carousel-intro').carousel('prev');
 	}).on('swipeleft', function(){
		$('#carousel-intro').carousel('next');
 	});
 	
 	$('.carousel-right').on('click',function(){
 		$('#carousel-intro').carousel('next');
 		return false;
 	});
 	
 	$('.carousel-left').on('click',function(){
 		$('#carousel-intro').carousel('prev');
 		return false;
 	});
 	
 	$('input[type=submit]').on('submit', function(){
 		$(this).attr('disabled', 'disabled');
 	});
 	
 	if(is_touch_device()) {
 		$('.carousel-navigation').hide();
 	}
	
	
});