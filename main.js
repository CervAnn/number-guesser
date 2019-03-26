
// 1:Variables
// 2:addEventListener
// 3:Functions


var minRange = document.querySelector('.input--min-range');
var maxRange = document.querySelector('.input--max-range');
var buttonRangeUpdate = document.querySelector('.button--update-range');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');
// var _min = 1;
// var _max = 100;
//minRange = Math.min(Math.max(parseInt(number), 1), 100);
//maxRange = Math.min(Math.max(parseInt(number), 1), 100);

// function minBound(minRange,_min,_max){

//         return Math.max(Math.min(_number, _max), _min);
// }

// function maxBound(maxRange, _min, _max){
//         return Math.max(Math.min(_number, _max), _min);
// }

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
	console.log(minRange.value)
	console.log(maxRange.value)
	console.log(typeof minRange)
	console.log(typeof maxRange.value)
	if(minRange.value >= maxRange.value){
		alert('Min & Max Range Conflict');
	}else{getRandom()};
}


function getRandom() {
 var min = Math.ceil(minRange.value);
 var max = Math.floor(maxRange.value);

 randomNum = Math.floor(Math.random() * (max - min)) + min;
 minNumber.innerText = min;
 maxNumber.innerText = max;
 console.log('randomNum' + randomNum);
 return randomNum;
}

buttonSubmitGuess.addEventListener("click", minError);


function minError(){
	if(p1GuessInput.value < minRange.value){
		alert('Player 1 Guess Below Range');
	}else if(p2GuessInput.value < minRange.value){
		alert('Player 2 Guess Below Range');
	}else{
		maxError();
	}
	
	
};
//switch p1GuessInput, maxRange//
function maxError(){
	// if(maxRange.value < p1GuessInput.value){
		if(p1GuessInput.value > maxRange.value){
		alert('Player 1 Guess Over Range');
	}else if(p2GuessInput.value > maxRange.value){
	// }else if(maxRange.value < p2GuessInput.value){
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

function enableButtonColor(){
	if (buttonClear.disabled = false){
		this.button.style.background = "#6E6E6E";
	}
}













