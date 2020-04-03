import readlineSync from 'readline-sync';
import { inputToNormal } from './utils.js';

// --------------------------------------------------
// Движок игр
// --------------------------------------------------

const roundsCount = 3; // число раундов для всех игр

const gameEngine = (description, rounds) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Начинаем серию раундов.
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = rounds[i];

    console.log(description);
    console.log(`Question: ${question}`);
    const userAnswer = inputToNormal(readlineSync.question('Your answer: ')); // преобразуем ответ к стандартному виду

    // При неверном ответе завершаем игру.
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  // Победа во всех раундах.
  console.log(`Congratulations, ${userName}!`);
};

export { roundsCount, gameEngine };
