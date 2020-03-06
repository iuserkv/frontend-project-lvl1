import readlineSync from 'readline-sync';
import { getRandomNumber, strToInt } from '../index.js';
import brainGreeting from './game-greeting.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Проверяет ответ пользователя.
// Если ответ верный, возвращает true, иначе false.
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
// Игра "Brain progression"
// --------------------------------------------------

const brainProgression = (maxRandomNumber) => {
  // Приветствуем игрока.
  const userName = brainGreeting();

  // Начинаем игру.
  console.log('What number is missing in the progression?');

  // Длина последовательности чисел.
  const sequenceLength = 10;

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Получаем последовательность чисел и случайный пропущенный элемент.
    let currentNumber = getRandomNumber(maxRandomNumber);
    const difSequence = getRandomNumber(maxRandomNumber);
    const sequence = [];
    for (let j = 0; j < sequenceLength; j += 1) {
      currentNumber += difSequence;
      sequence.push(currentNumber);
    }

    // Выбираем случайное число последовательности,
    // которое должен вычислить игрок.
    const randomIndex = getRandomNumber(sequenceLength);
    const correctValue = sequence[randomIndex];
    sequence[randomIndex] = '..';
    console.log(`Question: ${sequence.join(' ')}`);

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

export default brainProgression;
