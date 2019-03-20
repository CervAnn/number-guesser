
var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');

var p1NameInput  = document.querySelector('.input--p1-name')
var p2NameInput  = document.querySelector('.input--p2-name')
var buttonSubmitGuess = document.querySelector('.button--submit-guess');
var p1NameOutput  = document.querySelector('.output--p1-name')
var p2NameOutput  = document.querySelector('.output--p2-name')

var p1GuessInput  = document.querySelector('.input--p1-guess')
var p2GuessInput  = document.querySelector('.input--p2-guess')
var p1GuessOutput  = document.querySelector('.output--p1-guess')
var p2GuessOutput  = document.querySelector('.output--p2-guess')


buttonRangeUpdate.addEventListener("click", getRandom);

function getRandom() {
 var min = Math.ceil(minRange.value);
 var max = Math.floor(maxRange.value);
 console.log(min);
 console.log(max);

 var randomNum = Math.floor(Math.random() * (max - min)) + min;
 minNumber.innerText = min;
 maxNumber.innerText = max;
 console.log(randomNum);
 return randomNum;
}


buttonSubmitGuess.addEventListener("click", nameHandler);


function nameHandler() {
 var p1 = p1NameInput.value;
 var p2 = p2NameInput.value;
 console.log(p1);
 console.log(p2);

 p1NameOutput.innerText = p1;
 p2NameOutput.innerText = p2;

 var g1 = p1GuessInput.value;
 var g2 = p2GuessInput.value;
 console.log(g1);
 console.log(g2);

 p1GuessOutput.innerText = g1;
 p2GuessOutput.innerText = g2;

}