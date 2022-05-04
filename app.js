// import functions and grab DOM elements
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');

const shell1 = document.getElementById('shell-1-img');
const shell2 = document.getElementById('shell-2-img');
const shell3 = document.getElementById('shell-3-img');

const ball1 = document.getElementById('ball-1');
const ball2 = document.getElementById('ball-2');
const ball3 = document.getElementById('ball-3');

const feedbackSpan = document.getElementById('feedback');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');
// let state
let wins = 0;
let losses = 0;
// set event listeners 

function trackStats() {
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
}

function reset() {
    shell1.classList.remove('shellUp');
    shell2.classList.remove('shellUp');
    shell3.classList.remove('shellUp');
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
    feedbackSpan.textContent = 'Try again?';
}

button1.addEventListener('click', () => {
    // reset shells and ball in case user hasn't waited for timeout
    reset();
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
     // if randomShell = 1, increment wins
     // else, increment losses
    if (randomShell === 1) {
        shell1.classList.add('shellUp');
        ball1.classList.add('reveal');
        wins++;
        feedbackSpan.textContent = 'Yes, the ball is there!';
    } else if (randomShell === 2) {
        shell2.classList.add('shellUp');
        ball2.classList.add('reveal');
        losses++;
        feedbackSpan.textContent = 'No, the ball is over here.';
    } else {
        shell3.classList.add('shellUp');
        ball3.classList.add('reveal');
        losses++;
        feedbackSpan.textContent = 'No, the ball is over here.';
    }
    trackStats();
    setTimeout(() => {
        reset();
    }, '3000');
});

button2.addEventListener('click', () => {
    // reset shells and ball in case user hasn't waited for timeout
    reset();
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
     // if randomShell = 2, increment wins
     // else, increment losses
     // show where ball was
    if (randomShell === 2) {
        shell2.classList.add('shellUp');
        ball2.classList.add('reveal');
        wins++;
        feedbackSpan.textContent = 'Yes, the ball is there!';
    } else if (randomShell === 3) {
        shell3.classList.add('shellUp');
        ball3.classList.add('reveal');
        losses++;
        feedbackSpan.textContent = 'No, the ball is over here.';
    } else {
        shell1.classList.add('shellUp');
        ball1.classList.add('reveal');
        losses++;
        feedbackSpan.textContent = 'No, the ball is over here.';
    }
    trackStats();
    setTimeout(() => {
        reset();
    }, '3000');
});

button3.addEventListener('click', () => {
    // reset shells and ball in case user hasn't waited for timeout
    reset();
    // decide which shell the ball is under
    const randomShell = Math.ceil(Math.random() * 3);
     // if randomShell = 3, increment wins
     // else, increment losses
    if (randomShell === 3) {
        shell3.classList.add('shellUp');
        ball3.classList.add('reveal');
        wins++;
        feedbackSpan.textContent = 'Yes, the ball is there!';
    } else if (randomShell === 1) {
        shell1.classList.add('shellUp');
        ball1.classList.add('reveal');
        losses++;
        feedbackSpan.textContent = 'No, the ball is over here.';
    } else {
        shell2.classList.add('shellUp');
        ball2.classList.add('reveal');
        losses++;
        feedbackSpan.textContent = 'No, the ball is over here.';
    }
    trackStats();
    setTimeout(() => {
        reset();
    }, '3000');
});
