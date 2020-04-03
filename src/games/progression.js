import { getRandomNumber } from '../utils.js';
import { roundsCount, gameEngine } from '../game-engine.js';

// --------------------------------------------------
// Игра "Brain progression"
// --------------------------------------------------

const startBrainProgression = () => {
  const maxRandomNumber = 100;

  const description = 'What number is missing in the progression?';
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const sequenceLength = 10; // длина прогрессии
    const sequence = []; // элементы прогрессии
    const startNumber = getRandomNumber(0, maxRandomNumber); // первый элемент прогрексии
    const diffSequence = getRandomNumber(0, maxRandomNumber); // шаг прогресии
    for (let j = 0; j < sequenceLength; j += 1) {
      sequence.push(startNumber + diffSequence * j);
    }
    const skipIndex = getRandomNumber(0, sequenceLength - 1); // индекс пропущенного элемента
    sequence[skipIndex] = '..';
    const correctAnswer = startNumber + diffSequence * skipIndex;
    const question = `${sequence.join(' ')}`;
    const round = { question, correctAnswer };

    rounds.push(round);
  }

  gameEngine(description, rounds);
};

export default startBrainProgression;
