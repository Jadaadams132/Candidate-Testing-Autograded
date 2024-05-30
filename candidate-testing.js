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
let candidateAnswers = [];

for (let i = 0; i < questions.length; i++) { 
  console.log(questions[i]);
}
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

function gradeQuiz(candidateAnswers)  {
  let score = [`0, 20, 40, 60, 80`];
  if (candidateAnswers === score[0]) {
    console.log('You have 0/5 questions correct.');
    return score[0];
    } else if (candidateAnswers === score[1]) {
      console.log('You have 1/5 questions correct.');
      return score[1];
      } else if (candidateAnswers === score[2]) {
        console.log('You have 2/5 questions correct.');
        return score[2];
        } else if (candidateAnswers === score[3]) {
          console.log('You have 3/5 questions correct.');
          return score[3];
          } else if (candidateAnswers === score[4]) {
            console.log('You have 4/5 questions correct.');
            return score[4];
            } else if (candidateAnswers === score[5]) {
              console.log('You have 5/5 questions correct.');
              return score[5]
              
  }; return gradeQuiz();
    
    
  }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (candidateAnswer === correctAnswer) {
    console.log("Your answer is correct.")
} else {
  console.log("Your answer is incorrect.");
}

 
let grade = (score / 5) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
 
if (grade == 100) {
  return 100
} if (grade == 80) {
  return 80    
  } if (grade == 60) {
  return 60
  } if (grade == 40) {
    return 40
  } if (grade == 20) {
    return 20
    } if (grade == 0) {
      return 0
    }

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