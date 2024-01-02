// Array of quiz questions with choices and correct answers
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },

    {
      question: "Which programming language is this quiz written in?",
      choices: ["Java", "Python", "JavaScript", "C++"],
      correctAnswer: "JavaScript",
    },

    {
      question: "which of the following is a programming language?",
      choices: ["html", "microsoft", "microsoft excel", "website"],
      correctAnswer: "html",
    },

    {
      question: "what is the link between html and css?",
      choices: ["JavaScript", "readme", "asset","link rel", "others"],
      correctAnswer: "link rel",
    },

    {
      question: "why do we use JavaScript"?
      choices: ["beautify", "functionality", "webpage", "others"],
      correctAnswer:"functionality",
    },

    // Add more questions as needed
  ];
  
  // Quiz state variables
  let currentQuestionIndex = 0;
  let score = 0;
  let time = 60;
  let timerInterval;
  
  // DOM elements
  const questionContainer = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");
  const nextBtn = document.getElementById("next-btn");
  const timeElement = document.getElementById("time");
  const scoreElement = document.getElementById("score");
  
  // Function to start the quiz
  function startQuiz() {
    showQuestion();
    startTimer();
  }
  
  // Function to display a question and its choices
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
  
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(choice));
      choicesContainer.appendChild(button);
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedChoice === currentQuestion.correctAnswer;
  
    if (isCorrect) {
      score++;
    }
  
    displayFeedback(isCorrect);
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        showQuestion();
        resetFeedback();
      }, 1000); // Delay for 1 second before showing the next question
    } else {
      endQuiz();
    }
  }
  
  // Function to display feedback (correct or wrong)
  function displayFeedback(isCorrect) {
    const feedbackElement = document.createElement("div");
    feedbackElement.textContent = isCorrect ? "Correct!" : "Wrong!";
    feedbackElement.classList.add(isCorrect ? "correct" : "wrong");
    choicesContainer.appendChild(feedbackElement);
  }
  
  // Function to reset the feedback element
  function resetFeedback() {
    const feedbackElement = choicesContainer.querySelector(".correct, .wrong");
    if (feedbackElement) {
      feedbackElement.remove();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(() => {
      time--;
      timeElement.textContent = time;
      if (time <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz and display the final score
  function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.textContent = "Quiz Completed!";
    choicesContainer.innerHTML = "";
    nextBtn.style.display = "none";
    scoreElement.textContent = `Your final Score: ${score} / ${questions.length}`;
  }
  
  // Start the quiz when the page loads
  startQuiz();
  