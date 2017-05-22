
document.getElementById('color-button').onclick = changeColor;

function changeColor() {
	var red = document.getElementById('red').value;
	var green = document.getElementById('green').value;
	var blue = document.getElementById('blue').value;
	
	var colorStr = 'rgb(' + red + ',' + green + ',' + blue +')';
	
	document.getElementById('colorful-text').innerHTML = colorStr;
	
	document.getElementById('wrapper').style.background = colorStr;

}

