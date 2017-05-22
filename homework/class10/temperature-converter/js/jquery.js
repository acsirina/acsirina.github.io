$(document).ready(function(){

$('#far-input').keydown(function(){
        var farInput  = parseInt($('this').val());
        var celOutput = (farInput - 32) / 1.8;
        $('#cel-input').val(celOutput);
    })
})


 








// 	$('#far_input').keydown(function(){
// 		var farInput = parseInt($(this).val());

// 		var celOutput = (farInput - 32) / 1.8;

// 		$('#cel_input').val(celOutput);
// 	})


// 	$('#cel_input').keydown(function(){
// 		var celInput = parseInt($(this).val());

// 		var celOutput = (farInput - 32) / 1.8;

// 		$('#cel_input').val(celOutput);
// 	})
// })