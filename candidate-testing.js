const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer= '';


//TODO: Variables for Part 2
let questions = ["1. Who was the first American woman in space?", "2. True or False: 5 kilometer === 5000 meters", "3. (5 + 3)/2 * 10 = ? :", "4. Given the array [8, 'Orbit', 'Trajectory', 45], what is at index 2?", "5. What is the minimum crew size for the ISS?"]; 
let correctAnswers = ["Sally Ride", 'true', "40", 'Trajectory', "3" ];
let candidateAnswers = input.questions(questions[i]);


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
let candidateName = input.question("What is your name?");
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
const input = require("readline-sync");
let candidateAnswer = input.question(question);

}

function gradeQuiz(candidateAnswers) {
} for (let i = 0; i < 5; i++); {
  console.log(i);
} if (candidateAnswers[i] == correctAnswers[i]) {
  console.log()
}



  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
    console.log("Your answer is correct.")
} else {
  console.log("Your answer is incorrect.");
}

 
let grade = (candidateAnswers)/(5)*100;  //TODO 3.2 use this variable to calculate the candidates score.
 
if (grade >= 80); {
    console.log(`You passed with ${grade}`);
  } if (grade < 80) {
    console.log(`You failed with ${grade}`);
  }
  return grade;


function runProgram() {

  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log('Hello,'+ candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};