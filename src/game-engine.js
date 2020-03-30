import readlineSync from 'readline-sync';
import { inputToNormal, isCorrectAnswer } from './index.js';


// --------------------------------------------------
// Движок игр
// --------------------------------------------------

const countRounds = 3; // число раундов для всех игр

const gameEngine = (parameters) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let userAnswer = null;
  let correctAnswer = null;

  // Начинаем серию раундов.
  console.log(parameters);
  for (let i = 0; i < countRounds; i += 1) {
    console.log(parameters.description);
    console.log(parameters.rounds[i].question);
    userAnswer = inputToNormal(readlineSync.question('Your answer: ')); // преобразуем ответ к стандартному виду
    correctAnswer = parameters.rounds[i].correctAnswer;

    // При неверном ответе завершаем игру.
    if (!isCorrectAnswer(userAnswer, correctAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  // Победа во всех раундах.
  console.log(`Congratulations, ${userName}!`);
};

export { countRounds, gameEngine };
