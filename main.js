var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');


buttonRangeUpdate.addEventListener("click", getRandom);

function getRandom() {
  var min = minRange.value;
  var max = maxRange.value;
  console.log(min);
  console.log(max);
  // newInput(minInput, max)
  var randomNum = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomNum);
  return randomNum;
}

// function newInput() {
//   var min = minRange.value;
//   var max = maxRange.value;
//   var minInput =  document.querySelector('.input--min-range').value;
//   var maxInput = document.querySelector('.input--max-range').value;


//   document.querySelector('.min-number', '.max-number').innerText=input;
// }

