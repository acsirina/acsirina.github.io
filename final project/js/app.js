
$(".home-nav-link").click(function() {
	console.log('home click');
    $('html, body').animate({
        scrollTop: $(".home-section").offset().top - 300
    }, 1000);
});






$(".about-nav-link").click(function() {
	console.log('about click');
    $('html, body').animate({
        scrollTop: $(".about-section").offset().top - 300
    }, 1000);
});


$(".program-nav-link").click(function() {
	console.log('home click');
    $('html, body').animate({
        scrollTop: $(".program-section").offset().top - 300
    }, 1000);
});

$(".join-nav-link").click(function() {
	console.log('home click');
    $('html, body').animate({
        scrollTop: $(".join-section").offset().top - 300
    }, 1000);
});










// $('.prog').hover(function() {
//   $(this).find('.overlay')toggle({ effect: "scale", direction: "horizontal" });
// });




// $('.prog').hover(function(){

// 	$(this).find('program-description').slideToggle();


// })





















// $(".program-nav-link").click(function() {
// 	console.log('program click');
//     $('html, body').animate({
//         scrollTop: $(".program-section").offset().top - 100
//     }, 1000);
// });


// $('.gradeschool').hover(function(){

// 	$(this).find('.program-content').slideToggle();


// })

