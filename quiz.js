function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Select the checked radio button from the quiz
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Retrieve the user’s answer value, ensuring selection exists
  const userAnswer = selectedOption ? selectedOption.value : "";

  // Compare the user’s answer with the correct answer
  const feedbackDiv = document.getElementById("feedback");

  feedbackDiv.style.display = "block";
  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = "Correct! Well done.";
    feedbackDiv.style.color = "#28a745"; // Green for success
  } else {
    feedbackDiv.textContent = "That's incorrect. Try again!";
    feedbackDiv.style.color = "#dc3545"; // Red for error
  }
}

// Attach event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
