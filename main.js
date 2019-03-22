
var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');

var p1NameInput  = document.querySelector('.input--p1-name');
var p2NameInput  = document.querySelector('.input--p2-name');
var buttonSubmitGuess = document.querySelector('.button--submit-guess');
var p1NameOutput  = document.querySelector('.output--p1-name');
var p2NameOutput  = document.querySelector('.output--p2-name');
var randomNum;

var p1GuessInput  = document.querySelector('.input--p1-guess');
var p2GuessInput  = document.querySelector('.input--p2-guess');
var p1GuessOutput  = document.querySelector('.output--p1-guess');
var p2GuessOutput  = document.querySelector('.output--p2-guess');

var p1HiLo = document.querySelector('.p1-hi-lo');
var p2HiLo = document.querySelector('.p2-hi-lo');
var buttonClear = document.querySelector('.button--clear-game');
var buttonReset = document.querySelector('.button--reset-game');


buttonRangeUpdate.addEventListener("click", getRandom);

function getRandom() {
 var min = Math.ceil(minRange.value);
 var max = Math.floor(maxRange.value);
 //console.log(min);
 //console.log(max);

 randomNum = Math.floor(Math.random() * (max - min)) + min;
 minNumber.innerText = min;
 maxNumber.innerText = max;
 console.log('randomNum' + randomNum);
 return randomNum;
}


buttonSubmitGuess.addEventListener("click", () =>{
	nameHandler();
	p1Guess();
	p2Guess();
	});




function nameHandler() {
	var p1 = p1NameInput.value;
	var p2 = p2NameInput.value;
	//console.log(p1);
	//console.log(p2);

	p1NameOutput.innerText = p1;
	p2NameOutput.innerText = p2;

	var g1 = p1GuessInput.value;
	var g2 = p2GuessInput.value;
	//console.log(g1);
	//console.log(g2);

	p1GuessOutput.innerText = g1;
	p2GuessOutput.innerText = g2;

}


function p1Guess() {
	var g1 = p1GuessInput.value;
	
	//console.log(p1HiLo);
	//console.log(g1);
	//console.log(p1GuessInput.value)

	 if (g1 < randomNum) {
	 	p1HiLo.innerText = "that's too low";
	 } else if (g1 > randomNum) {
	 	p1HiLo.innerText = "that's too high";
	 } else if (g1 == randomNum) {
	 	p1HiLo.innerText = "YOU WIN!";
	 }
}



function p2Guess() {
	var g2 = p2GuessInput.value;
	
	//console.log(p2HiLo);
	//console.log(g2);
	//console.log(p2GuessInput.value)

	 if (g2 < randomNum) {
	 	p2HiLo.innerText = "that's too low";
	 } else if (g2 > randomNum) {
	 	p2HiLo.innerText = "that's too high";
	 } else if (g2 == randomNum) {
	 	p2HiLo.innerText = "YOU WIN!";
	 }
}

// Testing below this line

buttonClear.addEventListener('click', () =>{
	p1NameOutput.innerText = 'Challenger 1';
	p2NameOutput.innerText = 'Challenger 2';
	p1GuessOutput.innerText = 'Challenger 1 needs to guess';
	p2GuessOutput.innerText = 'Challenger 2 needs to guess';
	p1HiLo.innerText = '';
	p2HiLo.innerText = '';
	p1NameInput.value = '';
	p2NameInput.value = '';
	p1GuessInput.value = '';
	p2GuessInput.value = '';

});

buttonReset.addEventListener('click', () =>{
	minRange.value = '0';
	maxRange.value = '100';
	getRandom();
	p1NameOutput.innerText = 'Challenger 1';
	p2NameOutput.innerText = 'Challenger 2';
	p1GuessOutput.innerText = 'Challenger 1 needs to guess';
	p2GuessOutput.innerText = 'Challenger 2 needs to guess';
	p1HiLo.innerText = '';
	p2HiLo.innerText = '';
	p1NameInput.value = '';
	p2NameInput.value = '';
	p1GuessInput.value = '';
	p2GuessInput.value = '';

});











































