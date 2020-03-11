import readlineSync from 'readline-sync';


// --------------------------------------------------
// Описание сосотяния игры
// --------------------------------------------------

const WIN_GAME = 0; // победа пользователя
const LOSE_GAME = -1; // поражение пользователя


// --------------------------------------------------
// Функции диалога с пользователем
// --------------------------------------------------

// Выводит сообщение для пользователя.
const sendMessage = (message) => console.log(message);

// Возвращает ответ пользователя.
const getAnswer = (message = 'Your answer: ') => readlineSync.question(message);

// Запрашивает и возвращает имя пользователя.
const getUserName = (requestName = 'May I have your name? ') => readlineSync.question(requestName);

// Привествует пользователя и возвращает его имя.
const greetingUser = () => {
  sendMessage('Welcome to the Brain Games!');

  const userName = getUserName();
  sendMessage(`Hello, ${userName}!`);

  return userName;
};

// Выводит сообщение об ошибке.
const sendWrongMessage = (correctAnswer, userAnswer, userName) => {
  sendMessage(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
};

// Выводит поздравление пользователя с победой.
const congratulationUser = (userName) => sendMessage(`Congratulations, ${userName}!`);


// --------------------------------------------------
// Функции обработки ввода пользователя
// --------------------------------------------------

// Приводи input в соотвтетствие с 'yes' или 'no'.
// Если привести input не удается, возвращает null.
const inputToYesNo = (input) => {
  const setAnswers = ['yes', 'no'];

  if (setAnswers.indexOf(input) !== -1) {
    return input;
  }

  return null;
};

// Если input нельзя привести к числу, возвращает null,
// иначе возвращает число, соответствующее input.
const inputToInt = (input) => {
  const inputNumber = parseInt(input, 10);

  if (Number.isNaN(inputNumber)) {
    return null;
  }

  return inputNumber;
};

// Проверяет ответ пользователя.
// Возвращает true если userAnswer и correctAnswer совпадают,
// иначе возвращает false.
const isCorrectAnswer = (correctAnswer, userAnswer) => {
  const answer = userAnswer;

  if (answer === null) {
    return false;
  }

  if (answer === correctAnswer) {
    return true;
  }

  return false;
};


// --------------------------------------------------
// Вспомогательные функции для реализации игр
// --------------------------------------------------

// Возвращает случайное целое число в диапазоне от 0 до maxNumber.
const getRandomNumber = (maxNumber) => Math.round((Math.random() * maxNumber));

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

// Возвращает true, если number четное, иначе, false.
const isEven = (number) => number % 2 === 0;

// Возвращает наибольший общий делитель чисел number1 и number2.
const getGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num1;
};

// Если number простое число, возвращает true, иначе false.
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  // Если число делится без остатка на i, то данное число не простое.
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export {
  WIN_GAME, LOSE_GAME,
  sendMessage, getAnswer, greetingUser, sendWrongMessage, congratulationUser,
  getRandomNumber, getRandomOperation, calcExpression, isEven, getGcd, isPrime,
  inputToYesNo, inputToInt, isCorrectAnswer,
};
