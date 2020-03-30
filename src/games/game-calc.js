import { getRandomNumber } from '../index.js';
import { countRounds, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает случайным образом одну из операций: +, -, *.
const getRandomOperation = () => {
  const setOperations = ['+', '-', '*'];

  return setOperations[getRandomNumber(0, 2)];
};

// Вычисляет заданное выражение и возвращет его результат.
// number1, number2 - операнды; operation - операция.
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

  const parameters = {
    description: 'What is the result of the expression?', // описание игры
    rounds: [],
  };

  for (let i = 0; i < countRounds; i += 1) {
    const number1 = getRandomNumber(0, maxRandomNumber); // операнд 1
    const number2 = getRandomNumber(0, maxRandomNumber); // операнд 2
    const operation = getRandomOperation(); // операция
    const question = `Question: ${number1} ${operation} ${number2}`; // вопрос для игрока
    const correctAnswer = calcExpression(number1, number2, operation); // правильный ответ
    const round = { question, correctAnswer };

    parameters.rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(parameters);
};

export default startBrainCalc;
