import {
  WIN_GAME, LOSE_GAME,
  sendMessage, getAnswer, inputToInt, sendWrongMessage,
  getRandomNumber, getRandomOperation, calcExpression,
  isCorrectAnswer,
} from '../index.js';

// --------------------------------------------------
// Игра "Brain calc"
// --------------------------------------------------

const brainCalc = (userName, maxRandomNumber) => {
  // Начинаем игру.
  sendMessage('What is the result of the expression?');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Задаем выражение.
    const number1 = getRandomNumber(maxRandomNumber);
    const number2 = getRandomNumber(maxRandomNumber);
    const operation = getRandomOperation();
    sendMessage(`Question: ${number1} ${operation} ${number2}`);

    // Запрашиваем ответ игрока.
    const userAnswer = inputToInt(getAnswer());
    const correctAnswer = calcExpression(number1, number2, operation);

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

export default brainCalc;
