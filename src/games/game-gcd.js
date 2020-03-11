import {
  WIN_GAME, LOSE_GAME,
  sendMessage, getAnswer, inputToInt, sendWrongMessage,
  getRandomNumber, getGcd,
  isCorrectAnswer,
} from '../index.js';

// --------------------------------------------------
// Игра "Brain gcd"
// --------------------------------------------------

const brainGcd = (userName, maxRandomNumber) => {
  // Начинаем игру.
  sendMessage('Find the greatest common divisor of given numbers.');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Получаем два случайных числа.
    const number1 = getRandomNumber(maxRandomNumber);
    const number2 = getRandomNumber(maxRandomNumber);
    sendMessage(`Question: ${number1} ${number2}`);

    // Запрашиваем отет игрока.
    const userAnswer = inputToInt(getAnswer());
    const correctAnswer = getGcd(number1, number2);

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

export default brainGcd;
