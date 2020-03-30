import { getRandomNumber } from '../index.js';
import { countRounds, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает true, если number четное, иначе, false.
const isEven = (number) => number % 2 === 0;


// --------------------------------------------------
// Игра "Brain even"
// --------------------------------------------------

const startBrainEven = () => {
  const maxRandomNumber = 100;

  const parameters = {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    rounds: [],
  };

  for (let i = 0; i < countRounds; i += 1) {
    const randomNumber = getRandomNumber(0, maxRandomNumber);
    const question = `Question: ${randomNumber}`;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const round = { question, correctAnswer };

    parameters.rounds.push(round);
  }

  gameEngine(parameters);
};

export default startBrainEven;
