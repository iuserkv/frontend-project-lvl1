import { getRandomNumber } from '../index.js';
import { countRounds, maxRandomNumber, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Игра "Brain progression"
// --------------------------------------------------

const brainProgression = () => {
  const typeOfGame = 'progression';
  // Формируем данные для 3-х раундов.
  const rounds = [];
  for (let i = 0; i < countRounds; i += 1) {
    const sequenceLength = 10; // длина прогрессии
    let currentNumber = getRandomNumber(maxRandomNumber);
    const difSequence = getRandomNumber(maxRandomNumber); // шаг прогресии
    const sequence = []; // элементы прогрессии
    for (let j = 0; j < sequenceLength; j += 1) {
      currentNumber += difSequence;
      sequence.push(currentNumber);
    }
    // Выбираем случайное число последовательности,
    // которое должен вычислить игрок.
    const randomIndex = getRandomNumber(sequenceLength - 1);
    const correctAnswer = sequence[randomIndex];
    sequence[randomIndex] = '..';
    const round = [sequence, correctAnswer];

    rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(typeOfGame, rounds);
};

export default brainProgression;
