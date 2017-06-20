

$('.meme-form').submit(function(event){
	event.preventDefault();
	$('.gif-list').empty();

	var memeInputVal = $('.meme-input').val();

	console.log(memeInputVal);

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + memeInputVal + "&api_key=dc6zaTOxFJmzC&limit=5");
xhr.done(function(data) { 




	
	data.data.forEach(function(meme){

		var videoOne;
		videoOne+='<li>';
		videoOne+='<video src="';
		videoOne+= meme.images.looping.mp4;
		videoOne+= '" type="video/mp4" autoplay>';
		videoOne+= '<li>';

		$('.gif-list').append(videoOne);

		// $('.gif-list').append('<li><video src="' + meme.images.looping.mp4 + '" type = "video/mp4" autoplay></video></li>"');


		// console.log(meme.images.looping.mp4);


	})


});

})

