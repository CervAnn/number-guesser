
var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');

buttonRangeUpdate.addEventListener("click", getRandom);

function getRandom() {
 var min = Math.ceil(minRange.value);
 var max = Math.floor(maxRange.value);
 //console.log(min);
 //console.log(max);

 var randomNum = Math.floor(Math.random() * (max - min)) + min;
 console.log(randomNum);
 return randomNum;
}




