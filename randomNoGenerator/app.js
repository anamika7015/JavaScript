// random number generator

const minNum = 1;
const maxNum = 20;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("please enter the valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("please enter the valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN");
    } else {
      window.alert(
        `CORRECT! the answer was ${answer} It took you attempts ${attempts} attempts`);
      running = false;
    }
  }
}
