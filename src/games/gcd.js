import { getRandomNumber } from '../utils.js';
import { roundsCount, gameEngine } from '../game-engine.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает наибольший общий делитель чисел number1 и number2.
const getGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num1;
};

// --------------------------------------------------
// Игра "Brain GCD"
// --------------------------------------------------

const startBrainGcd = () => {
  const maxRandomNumber = 100;

  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomNumber(0, maxRandomNumber);
    const number2 = getRandomNumber(0, maxRandomNumber);
    const question = `${number1} ${number2}`;
    const correctAnswer = getGcd(number1, number2);
    const round = { question, correctAnswer };

    rounds.push(round);
  }

  gameEngine(description, rounds);
};

export default startBrainGcd;
