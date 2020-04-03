import { getRandomNumber } from '../utils.js';
import { roundsCount, gameEngine } from '../game-engine.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Если number простое число, возвращает true, иначе false.
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// --------------------------------------------------
// Игра "Brain prime"
// --------------------------------------------------

const startBrainPrime = () => {
  const maxRandomNumber = 100;

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, maxRandomNumber);
    const question = `${randomNumber}`;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const round = { question, correctAnswer };

    rounds.push(round);
  }

  gameEngine(description, rounds);
};

export default startBrainPrime;
