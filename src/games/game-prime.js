import {
  WIN_GAME, LOSE_GAME,
  sendMessage, getAnswer, inputToYesNo, sendWrongMessage,
  getRandomNumber, isPrime,
  isCorrectAnswer,
} from '../index.js';

// --------------------------------------------------
// Игра "Brain prime"
// --------------------------------------------------

const brainPrime = (userName, maxRandomNumber) => {
  // Начинаем игру.
  sendMessage('Answer "yes" if given number is prime. Otherwise answer "no".');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Получаем случайное число.
    const randomNumber = getRandomNumber(maxRandomNumber);
    sendMessage(`Question: ${randomNumber}`);

    // Запрашиваем ответ игрока.
    const userAnswer = inputToYesNo(getAnswer());
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

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

export default brainPrime;
