import readlineSync from 'readline-sync';
import { getRandomNumber, strToInt } from '../index.js';
import brainCongratulation from './game-congratulation.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает случайным образом одну из операция: +, -, *.
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

// Проверяет ответ пользователя.
// Если вычисленное значение (number) и введенное пользователем (answer) совпадают,
// возвращает true, иначе - false.
const isCorrectAnswer = (number, answer) => {
  const userAnswer = strToInt(answer);

  if (userAnswer === null) {
    return false;
  }

  if (number === userAnswer) {
    return true;
  }

  return false;
};

// --------------------------------------------------
// Игра "Brain calc"
// --------------------------------------------------

const brainCalc = (maxRandomNumber) => {
  // Приветствуем игрока.
  const userName = brainCongratulation();

  // Начинаем игру.
  console.log('What is the result of the expression?');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Задаем выражение и предлагем его вычислить.
    const number1 = getRandomNumber(maxRandomNumber);
    const number2 = getRandomNumber(maxRandomNumber);
    const operation = getRandomOperation();
    const correctValue = calcExpression(number1, number2, operation);
    console.log(`Question: ${number1} ${operation} ${number2}`);

    // Запрашиваем отет игрока.
    const userAnswer = readlineSync.question('Your answer: ');

    // Если ответ неверный, сообщаем об это и завершаем игру.
    if (!isCorrectAnswer(correctValue, userAnswer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctValue}".\nLet's try again, ${userName}!`);

      return;
    }

    // Если ответ верный, продолжаем.
    console.log('Correct!');
  }

  // Игрок победил.
  console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;
