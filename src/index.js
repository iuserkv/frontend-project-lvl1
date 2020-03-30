// Возвращает случайное целое число в диапазоне от minNub до maxNum включительно.
const getRandomNumber = (minNum, maxNum) => {
  const minNumber = Math.ceil(minNum);
  const maxNumber = Math.floor(maxNum);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

// Преобразует input к 'yes', 'no' или целому числу.
// Есле не удается, возвращает null.
const inputToNormal = (input) => {
  const setAnswers = ['yes', 'no'];
  if (setAnswers.indexOf(input) !== -1) {
    return input;
  }

  const inputNumber = parseInt(input, 10);
  if (Number.isNaN(inputNumber)) {
    return null;
  }

  return inputNumber;
};

// Проверяет на равенство userAnswer и correctAnswer.
// Возвращает true при равенстве и false в обратном случае.
const isCorrectAnswer = (userAnswer, correctAnswer) => {
  const answer = userAnswer;

  if (answer === null) {
    return false;
  }

  if (answer === correctAnswer) {
    return true;
  }

  return false;
};

export { getRandomNumber, inputToNormal, isCorrectAnswer };
