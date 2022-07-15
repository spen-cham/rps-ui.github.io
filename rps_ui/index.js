const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.btn');

var userWins = 0;

for (var i = 0; i < buttons.length; i++) {

    const name = buttons[i].classList[0];

    buttons[i].addEventListener('click', function () {
        console.log(name);
        output.innerHTML = playRound(name) + '<br> User Wins: ' + userWins;
    });

}


function randomPlay () {
    const hands = ['rock', 'paper', 'scissors'];
    return hands[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    let cpuSelection = randomPlay();

    if ((playerSelection == 'rock' && cpuSelection == 'scissors') ||
        (playerSelection == 'paper' && cpuSelection == 'rock') ||
        (playerSelection == 'scissors' && cpuSelection == 'paper')) {

            userWins++;
            return "Opponent picked " + cpuSelection + ", so you WIN!";

        }
    else if (playerSelection == cpuSelection) {
        return "Opponent picked " + cpuSelection + ", so you TIE!";
    }
    else {
        return "Opponent picked " + cpuSelection + ", so you LOSE!";
    }
}