


$(document).ready(function(){

$('#far-input').keydown(function(){
		// console.log('keydown working');
        var farInput  = parseInt($(this).val());
        var celOutput = (farInput - 32) / 1.8;
         $('#cel-input').val(celOutput);

    })


$('#cel-input').keydown(function(){
		console.log('keydown working');
        var celInput  = parseInt($(this).val());
        var falOutput = celInput * (9 / 5) + 32;
        

        $('#far-input').val(falOutput);

        if (falOutput > 80) {
        $('body').css('background-color', 'red');
    }
    })
})
    


// if(lights =='on'){
//      $('#lightswitch').css('background-color', 'white');
//      $('#lightswitch').css('color', 'black');
//      $('body').css('background-color', 'black');
    
//      lights = 'off';
//  } else {
//      $('#lightswitch').css('background-color', 'black');
//      $('#lightswitch').css('color', 'white');
//      $('body').css('background-color', 'white');

//      lights = 'on';
//  }

// })
