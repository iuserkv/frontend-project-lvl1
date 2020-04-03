import { getRandomNumber } from '../utils.js';
import { roundsCount, gameEngine } from '../game-engine.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает случайным образом одну из операций: +, -, *.
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];

  return operations[getRandomNumber(0, operations.length - 1)];
};

const calcExpression = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

// --------------------------------------------------
// Игра "Brain calc"
// --------------------------------------------------

const startBrainCalc = () => {
  const maxRandomNumber = 100; // максимальное значение операндов

  const description = 'What is the result of the expression?'; // описание игры
  const rounds = []; // данные для раундов

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomNumber(0, maxRandomNumber); // операнд 1
    const number2 = getRandomNumber(0, maxRandomNumber); // операнд 2
    const operation = getRandomOperation(); // операция
    const question = `${number1} ${operation} ${number2}`; // данные вопроса для игрока
    const correctAnswer = calcExpression(number1, number2, operation); // правильный ответ
    const round = { question, correctAnswer };

    rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(description, rounds);
};

export default startBrainCalc;
