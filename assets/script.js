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


      