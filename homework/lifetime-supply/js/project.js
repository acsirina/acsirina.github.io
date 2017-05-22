 document.getElementById('click-me').onclick = lifeTimeCups;

function lifeTimeCups(){
	var age = document.getElementById('age').value;
	var maxAge = document.getElementById('max-age').value;
	var item = document.getElementById('item').value;
	var numPerDay = document.getElementById('num-per-day').value;
	

	var cupsResult = (maxAge - age) * (numPerDay * 395);


document.getElementById('solution').innerHTML = cupsResult;
document.getElementById('drink').innerHTML = item;

}
console.log	('testing is this file working')
