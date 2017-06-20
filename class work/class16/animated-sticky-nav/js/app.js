$(document).ready(function () {

	$(window).scroll(function(){
		var offset = $(window).scrollTop();
		console.log(offset);

	if (offset >  30) {
		$('header').addClass('small-header');
	
	} else {
		$('header').removeClass('small-header');
	}

})

})
