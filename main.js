
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


buttonRangeUpdate.addEventListener("click", getRandom);

function getRandom() {
 var min = Math.ceil(minRange.value);
 var max = Math.floor(maxRange.value);

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
	 	genCard();
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
	 	genCard();
	 }
}

function winnerStatement(){
	if ((p1Correct === p1NameInput.value) && (p2Correct === p2NameInput.value)){
		winner = "It's a Tie";
		alert('BOOM! ' + winner);
		winReset();
	}else if(p1Correct === p1NameInput.value){
		winner = p1NameInput.value;
		alert('BOOM! ' + winner + ' WINS!');
		winReset();
	}else if(p2Correct === p2NameInput.value){
		winner = p2NameInput.value;
		alert('BOOM! ' + winner + ' WINS!');
		winReset();
	}

	function winReset(){
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

// Testing below this line



var finishedGames = document.querySelector('.finished-games');


function genCard() {
	var winnerBox = `
	<div class="winner-box">
          <div class="contestant-names">
            <span class="output--p1-name">Challenger 1 Name</span>
            <p>vs</p>
            <span class="output--p2-name">Challenger 2 Name</span>
          </div>
          <span class="winner-name">Winner Name</span>
          <div class="game-stats">
            <span class="guess-count">47</span>
            <p>guesses</p>
            <span class="game-timer">1.35</span>
            <p>minutes</p>
          </div>
          <img src="" alt="cancel button"/>
          `
  finishedGames.insertAdjacentHTML('afterBegin', winnerBox)
};
//genCard();

















