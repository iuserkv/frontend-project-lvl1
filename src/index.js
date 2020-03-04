import readlineSync from 'readline-sync';

// Запрашивает и возвращает имя пользователя.
const getUserName = () => readlineSync.question('May I have your name? ');

// Возвращает случайное целое число в диапазоне от 0 до maxNumber.
const getRandomNumber = (maxNumber) => Math.round((Math.random() * maxNumber));

// Проверяет input на соотвествие 'yes' или 'no'. Если input что-то иное, возвращает null.
const isInputYesNo = (input) => {
  const setAnswers = ['yes', 'no'];

  if (setAnswers.indexOf(input) !== -1) {
    return input;
  }

  return null;
};

// Если input нельзя привести к числу, возвращает null,
// иначе возвращает число, соответствующее input.
const strToInt = (input) => {
  const inputNumber = parseInt(input, 10);

  if (Number.isNaN(inputNumber)) {
    return null;
  }

  return inputNumber;
};

export {
  getUserName, getRandomNumber, isInputYesNo, strToInt,
};
