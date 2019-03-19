var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');

function getRandom(minRange, maxRange) {
  minRange = Math.ceil(minRange);
  maxRange = Math.floor(maxRange);
  return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
  console.log(Math.floor(Math.random() * (maxRange - minRange)) + minRange);
}

buttonRangeUpdate.addEventListener("click", getRandom);

// { 

//   function getRandom(minRange, maxRange) {
//   minRange = Math.ceil(minRange)
//   maxRange = Math.floor(maxRange)
//   return Math.floor(Math.random() * (maxRange - minRange)) + minRange;
//   } 
// };


console.log(minRange);
console.log(maxRange);
