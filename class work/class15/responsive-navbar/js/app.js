$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
		if($(window).width() > 640){
			$('#small-nav').hide();
		}
	})
	$('#burger').click(function(){

		$('#small-nav').slideToggle();
	})
})
