import { getRandomNumber } from '../utils.js';
import { roundsCount, gameEngine } from '../game-engine.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

const isEven = (number) => number % 2 === 0;

// --------------------------------------------------
// Игра "Brain even"
// --------------------------------------------------

const startBrainEven = () => {
  const maxRandomNumber = 100;

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, maxRandomNumber);
    const question = `${randomNumber}`;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const round = { question, correctAnswer };

    rounds.push(round);
  }

  gameEngine(description, rounds);
};

export default startBrainEven;
