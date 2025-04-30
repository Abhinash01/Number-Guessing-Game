const button = document.getElementById('guessBtn');
const input = document.getElementById('guessInput');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const userGuess = parseInt(input.value);
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    result.textContent = "Please enter a number between 1 and 10.";
    result.style.color = "red";
  } else if (userGuess === randomNumber) {
    result.textContent = `🎉 Correct! The number was ${randomNumber}`;
    result.style.color = "green";
  } else {
    result.textContent = `❌ Wrong! The number was ${randomNumber}`;
    result.style.color = "crimson";
  }
});
