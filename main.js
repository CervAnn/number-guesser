
// 1:Variables
// 2:addEventListener
// 3:Functions


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

var p1Correct;
var p2Correct;
var winner;


buttonRangeUpdate.addEventListener("click", rangeError);




function rangeError(){
	var min = parseInt(minRange.value);
	var max = parseInt(maxRange.value);
	console.log(min);
	console.log(max);
	if(min >= max){
		alert('Min & Max Range Conflict');
	}else if(isNaN(min) || isNaN(max)){
		alert('Min & Max Range Conflict');
	}else{getRandom()};
};

function getRandom() {
 var min = Math.ceil(parseInt(minRange.value));
 var max = Math.floor(parseInt(maxRange.value));

 randomNum = Math.floor(Math.random() * (max - min)) + min;
 minNumber.innerText = min;
 maxNumber.innerText = max;
 console.log('randomNum' + randomNum);
 return randomNum;
};



buttonSubmitGuess.addEventListener("click", minError);

//you can make minError an maxerror dynamic
// create a new function 
// pass in arguments

function minError(){
	var p1 = parseInt(p1GuessInput.value);
	var p2 = parseInt(p2GuessInput.value);
	var min = parseInt(minRange.value);
	var max = parseInt(maxRange.value);
	if(min > p1){
		alert('Player 1 Guess Below Range');
	}else if(min > p2){
		alert('Player 2 Guess Below Range');
	}else if(isNaN(p1) || isNaN(p2)){
		alert('Player Guess Missing');
	}else if(p1NameInput.value === '' || p2NameInput.value === ''){
		alert('Player Name Missing');
	}else{
		maxError();
	};
	
};

function maxError(){
	var p1 = parseInt(p1GuessInput.value);
	var p2 = parseInt(p2GuessInput.value);
	var min = parseInt(minRange.value);
	var max = parseInt(maxRange.value);
	if(max < p1){
		alert('Player 1 Guess Over Range');
	}else if(max < p2){
		alert('Player 2 Guess Over Range');
	}else{
		nameHandler();
		p1Guess();
		p2Guess();
	}
};



function nameHandler() {
	var p1 = p1NameInput.value;
	var p2 = p2NameInput.value;
	p1NameOutput.innerText = p1;
	p2NameOutput.innerText = p2;

	var g1 = p1GuessInput.value;
	var g2 = p2GuessInput.value;
	p1GuessOutput.innerText = g1;
	p2GuessOutput.innerText = g2;
}




// refactor into one function 
// a function that determines the player
// invoke guess function by passing in that player
// invoke guess function for the other player

function p1Guess() {
	var g1 = p1GuessInput.value;
	
	 if (g1 < randomNum) {
	 	p1HiLo.innerText = "That's too low";
	 } else if (g1 > randomNum) {
	 	p1HiLo.innerText = "That's too high";
	 } else if (g1 == randomNum) {
	 	p1HiLo.innerText = "BOOM!";
	 	p1Correct = p1NameInput.value;
	 	winnerStatement();
	 }
}



function p2Guess() {
	var g2 = p2GuessInput.value;

	 if (g2 < randomNum) {
	 	p2HiLo.innerText = "That's too low";
	 } else if (g2 > randomNum) {
	 	p2HiLo.innerText = "That's too high";
	 } else if (g2 == randomNum) {
	 	p2HiLo.innerText = "BOOM!";
	 	p2Correct = p2NameInput.value;
	 	winnerStatement();
	 }
}

function winnerStatement(){
	if ((p1Correct === p1NameInput.value) && (p2Correct === p2NameInput.value)){
		winner = "It's a Tie";
		alert('BOOM!');
		winReset();
	}else if(p1Correct === p1NameInput.value){
		winner = p1NameInput.value;
		alert('BOOM!');
		winReset(winner);
	}else if(p2Correct === p2NameInput.value){
		winner = p2NameInput.value;
		alert('BOOM!');
		winReset();
	}

	function winReset(){
		genCard(p1NameInput.value, p2NameInput.value, winner);
		p1Correct = '';
		p2Correct = '';
		winner = '';
	}

}

// var arr = [1,2,3,4,5,6,7]
// for(var i = 0; i < arr.length; i++){
// 	arr[0]
// }
// add a new class in css to everything you want to clear
// query select all = array
// create a function with a for loop to iterate through that array and reset evryone to ''
// pass in the query selected array

buttonClear.addEventListener('click', () =>{
  buttonClear.disabled = true;	  // figure out how to make clear button disabled without this line
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
	p1GuessOutput.innerText = '#';
	p2GuessOutput.innerText = '#';
});

buttonReset.addEventListener('click', () =>{
	minRange.value = '1';
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
	p1GuessOutput.innerText = '#';
	p2GuessOutput.innerText = '#';
});



p1NameInput.addEventListener('keyup', checkClearDisabled)
p2NameInput.addEventListener('keyup', checkClearDisabled)   
p1GuessInput.addEventListener('keyup', checkClearDisabled)
p2GuessInput.addEventListener('keyup', checkClearDisabled)


function checkClearDisabled(){
	if(buttonClear.disabled === true){
		clearDisable()
					//console.log(p2GuessInput.value);
					//console.log(p1GuessInput.value);
	};
};

function clearDisable(){ 
	if(p1NameInput.value === '' &&
		 p2NameInput.value === '' &&
		 p1GuessInput.value === '' &&  
		 p2GuessInput.value === '')   
			{
		   console.log('clear button disabled');
		   buttonClear.disabled = true;
			} else{
				console.log('enabled');
		buttonClear.disabled = false;
			}
};

//reset button enabler

p1NameInput.addEventListener('keyup', checkResetDisabled)
p2NameInput.addEventListener('keyup', checkResetDisabled)   
p1GuessInput.addEventListener('keyup', checkResetDisabled)
p2GuessInput.addEventListener('keyup', checkResetDisabled)
minRange.addEventListener('keyup', checkResetDisabled)
maxRange.addEventListener('keyup', checkResetDisabled)

function checkResetDisabled(){
	if(buttonReset.disabled === true){
		resetDisable()
					//console.log(minRange.value)
					//console.log(maxRange.value)
	};
};

function resetDisable(){ 
	if(p1NameInput.value === '' &&
		 p2NameInput.value === '' &&
		 p1GuessInput.value === '' &&  
		 p2GuessInput.value === '' &&
		 minRange.value === '' &&
		 maxRange.value === '')   
			{
		   console.log('clear button disabled');
		   buttonReset.disabled = true;
			} else{
				console.log('enabled');
		buttonReset.disabled = false;
			}
};




var finishedGames = document.querySelector('.finished-games');


function genCard(challenger1, challenger2, winner) {
	var winnerBox = `
	<div class="winner-box">
          <div class="contestant-names">
            <span class="output--p1-name">${challenger1}</span>
            <p>VS</p>
            <span class="output--p2-name">${challenger2}</span>
          </div>
          <div class="winner">
            <span class="winner-name">${winner}</span>
            <p class="winner-tag">WINNER</p>
          </div>
          <div class="game-stats">
            <p><span class="guess-count">47</span> GUESSES</p>
            <p><span class="game-timer">1.35</span> MINUTES</p>
            <img src="close-button.png" alt="Close button" class="close-button"/>
          </div>
        </div>
          `
  finishedGames.insertAdjacentHTML('afterBegin', winnerBox)
};



// Testing below this line















