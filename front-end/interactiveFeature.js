function updateHeading(status) {
    const heading = document.getElementById('game-heading');
    heading.textContent = status;
  }
  
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  
  function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');
  
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      message.textContent = "Please enter a number between 1 and 10.";
      return;
    }
  
    attempts++;
  
    if (userGuess === randomNumber) {
      message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
      updateHeading("You Won!");
    } else if (userGuess < randomNumber) {
      message.textContent = "Too low! Try again.";
      updateHeading("Guessing, Too Low!");
    } else {
      message.textContent = "Too high! Try again.";
      updateHeading("Guessing, Too High!");
    }
  }
  