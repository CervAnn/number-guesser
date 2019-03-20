
var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');
<<<<<<< HEAD

=======
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');
>>>>>>> 6badfbe8c43b490043ff11f0954263ad3367cf0b

buttonRangeUpdate.addEventListener("click", getRandom);

function getRandom() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 6badfbe8c43b490043ff11f0954263ad3367cf0b

