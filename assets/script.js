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
      