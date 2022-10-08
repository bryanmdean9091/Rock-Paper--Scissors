let hands = document.getElementById('pix');
let rock = document.getElementById('rockBtn');
let paper = document.getElementById('paperBtn');
let scissors = document.getElementById('scissorsBtn');

let allHands = ['rock', 'paper', 'scissors'];
let rand = allHands[Math.floor(Math.random() * 3)]
console.log(rand)

function shakeUp() {
   document.getElementsByClassName('rock')[0].classList.add('ani');
   setTimeout(paperResult, 3000)
};

function paperResult() {
   document.getElementsByClassName('rock')[0].classList.remove('show');
   document.getElementsByClassName('rock')[0].classList.add('hidden');
   document.getElementsByClassName(`${rand}`)[0].classList.remove('hidden');
   document.getElementsByClassName(`${rand}`)[0].classList.remove('hidden');
   document.getElementsByClassName('resetBtn')[0].classList.remove('hidden');
   document.getElementsByClassName('resetBtn')[0].classList.remove('hidden');
};

function reset() {
   window.location.reload()
};

function storeVar(value) {
   let amount = value;
   // console.log(amount)
   document.getElementById('yourHand').innerHTML = ` Your Hand: ${amount}`
   if (rand === amount) {
     setTimeout(tie, 3100)
   }
   else if (rand === 'rock' && amount === 'scissors' || rand === 'paper' && amount === 'rock' || rand === 'scissors' && amount === 'paper') {
   setTimeout(lose, 3100)
   }
   else {
     setTimeout(win, 3100)
   }
};

function tie() {
   document.getElementById('header').innerHTML = "Tie Game!";
}
function lose() {
   document.getElementById('header').innerHTML = "You Lose!";
}
function win() {
   document.getElementById('header').innerHTML = "You Win!";
};
