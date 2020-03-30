import { getRandomNumber } from '../index.js';
import { countRounds, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Игра "Brain progression"
// --------------------------------------------------

const startBrainProgression = () => {
  const maxRandomNumber = 100;

  const parameters = {
    description: 'What number is missing in the progression?',
    rounds: [],
  };

  for (let i = 0; i < countRounds; i += 1) {
    const sequenceLength = 10; // длина прогрессии
    const sequence = []; // элементы прогрессии
    const startNumber = getRandomNumber(0, maxRandomNumber); // первый элемент прогрексии
    const difSequence = getRandomNumber(0, maxRandomNumber); // шаг прогресии
    for (let j = 0; j < sequenceLength; j += 1) {
      sequence.push(startNumber + difSequence * j);
    }
    const skipIndex = getRandomNumber(0, sequenceLength - 1); // индекс пропущенного элемента
    sequence[skipIndex] = '..';
    const correctAnswer = startNumber + difSequence * skipIndex;
    const question = `Question: ${sequence.join(' ')}`;
    const round = { question, correctAnswer };

    parameters.rounds.push(round);
  }

  gameEngine(parameters);
};

export default startBrainProgression;
