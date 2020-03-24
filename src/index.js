import readlineSync from 'readline-sync';


// --------------------------------------------------
// Функции диалога с пользователем
// --------------------------------------------------

// Запрашивает и возвращает имя пользователя.
const getUserName = (requestName = 'May I have your name? ') => readlineSync.question(requestName);

// Выводит сообщение для пользователя.
const sendMessage = (message) => console.log(message);

// Возвращает ответ пользователя.
const getAnswer = (message = 'Your answer: ') => readlineSync.question(message);

// Выводит сообщение об ошибке.
const sendWrongMessage = (correctAnswer, userAnswer, userName) => {
  sendMessage(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
};


// --------------------------------------------------
// Функции обработки ввода пользователя
// --------------------------------------------------

// Приводит input к 'yes' или 'no'.
// Если привести input к нужному виду не удается, возвращает null.
const inputToYesNo = (input) => {
  const setAnswers = ['yes', 'no'];

  if (setAnswers.indexOf(input) !== -1) {
    return input;
  }

  return null;
};

// Приводит input к числу.
// Если привести input к числу не удается, возвращает null.
const inputToInt = (input) => {
  const inputNumber = parseInt(input, 10);

  if (Number.isNaN(inputNumber)) {
    return null;
  }

  return inputNumber;
};


// --------------------------------------------------
// Вспомогательные функции для реализации игр
// --------------------------------------------------

// Возвращает случайное целое число в диапазоне от 0 до maxNumber.
const getRandomNumber = (maxNumber) => Math.round((Math.random() * maxNumber));

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

export {
  sendMessage, getUserName, getAnswer, sendWrongMessage,
  getRandomNumber, inputToYesNo, inputToInt, isCorrectAnswer,
};
