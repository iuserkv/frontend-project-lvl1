import { getRandomNumber } from '../index.js';
import { countRounds, maxRandomNumber, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает случайным образом одну из операций: +, -, *.
const getRandomOperation = () => {
  const setOperations = ['+', '-', '*'];
  const randomOperation = setOperations[getRandomNumber(2)];

  return randomOperation;
};

// Вычисляет заданное выражение и возвращет его результат.
// number1, number2 - операнды; operation - операция.
const calcExpression = (number1, number2, operation) => {
  if (operation === '+') {
    return number1 + number2;
  }

  if (operation === '-') {
    return number1 - number2;
  }

  if (operation === '*') {
    return number1 * number2;
  }

  return null;
};


// --------------------------------------------------
// Игра "Brain calc"
// --------------------------------------------------

const brainCalc = () => {
  const typeOfGame = 'calc';
  // Формируем данные для 3-х раундов.
  const rounds = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number1 = getRandomNumber(maxRandomNumber); // операнд 1
    const number2 = getRandomNumber(maxRandomNumber); // операнд 2
    const operation = getRandomOperation(); // операция
    const correctAnswer = calcExpression(number1, number2, operation); // правильный ответ
    const round = [number1, number2, operation, correctAnswer];

    rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(typeOfGame, rounds);
};

export default brainCalc;
