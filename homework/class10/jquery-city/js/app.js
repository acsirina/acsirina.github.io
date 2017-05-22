// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


$('.thumb').click(function(){
	var thumbnailSrc = $(this).attr('src');
	

	$('#bigimage').attr('src', thumbnailSrc);
	$('#thumbnails').children().css('border', '5px' ,'solid black');

	$('#wrapper').parent().css('border', '5px', 'solid red')
})
console.log($('#thumbnails').children())
// $('#second').click(function(){
// 	var thumbnailSrc = $('#second').attr('src');
	
	
// 	$('#bigimage').attr('src', thumbnailSrc);
// })

// $('#third').click(function(){
// 	var thumbnailSrc = $('#third').attr('src');
	
	
// 	$('#bigimage').attr('src', thumbnailSrc);
// })

// $('#fourth').click(function(){
// 	var thumbnailSrc = $('#fourth').attr('src');
	
	
// 	$('#bigimage').attr('src', thumbnailSrc);
// })