import { getRandomNumber } from '../index.js';
import { countRounds, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Если number простое число, возвращает true, иначе false.
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
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

  const parameters = {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    rounds: [],
  };

  for (let i = 0; i < countRounds; i += 1) {
    const randomNumber = getRandomNumber(0, maxRandomNumber);
    const question = `Question: ${randomNumber}`;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const round = { question, correctAnswer };

    parameters.rounds.push(round);
  }

  gameEngine(parameters);
};

export default startBrainPrime;
