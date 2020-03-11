import {
  WIN_GAME, LOSE_GAME,
  sendMessage, getAnswer, inputToInt, sendWrongMessage,
  getRandomNumber, isCorrectAnswer,
} from '../index.js';

// --------------------------------------------------
// Игра "Brain progression"
// --------------------------------------------------

const brainProgression = (userName, maxRandomNumber) => {
  // Начинаем игру.
  sendMessage('What number is missing in the progression?');

  // Длина последовательности чисел.
  const sequenceLength = 10;

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Получаем последовательность чисел.
    let currentNumber = getRandomNumber(maxRandomNumber);
    const difSequence = getRandomNumber(maxRandomNumber);
    const sequence = [];
    for (let j = 0; j < sequenceLength; j += 1) {
      currentNumber += difSequence;
      sequence.push(currentNumber);
    }

    // Выбираем случайное число последовательности,
    // которое должен вычислить игрок.
    const randomIndex = getRandomNumber(sequenceLength - 1);
    const correctAnswer = sequence[randomIndex];
    sequence[randomIndex] = '..';
    sendMessage(`Question: ${sequence.join(' ')}`);

    // Запрашиваем отет игрока.
    const userAnswer = inputToInt(getAnswer());

    // Если ответ неверный, сообщаем об это и завершаем игру.
    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      sendWrongMessage(correctAnswer, userAnswer, userName);

      return LOSE_GAME;
    }

    // Если ответ верный, продолжаем.
    sendMessage('Correct!');
  }

  return WIN_GAME;
};

export default brainProgression;
