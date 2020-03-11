import {
  WIN_GAME, LOSE_GAME,
  sendMessage, getAnswer, inputToYesNo, sendWrongMessage,
  getRandomNumber, isEven,
  isCorrectAnswer,
} from '../index.js';

// --------------------------------------------------
// Игра "Brain even"
// --------------------------------------------------

const brainEven = (userName, maxRandomNumber) => {
  // Начинаем игру.
  sendMessage('Answer "yes" if the number is even, otherwise answer "no".');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Гененерируем случайное целое число в заданном диапазоне.
    const randomNumber = getRandomNumber(maxRandomNumber);
    sendMessage(`Question: ${randomNumber}`);

    // Запрашиваем ответ игрока.
    const userAnswer = inputToYesNo(getAnswer());
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    // Если ответ неверный, завершаем игру.
    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      sendWrongMessage(correctAnswer, userAnswer, userName);

      return LOSE_GAME;
    }

    // Если ответ верный, продолжаем.
    sendMessage('Correct!');
  }

  return WIN_GAME;
};

export default brainEven;
