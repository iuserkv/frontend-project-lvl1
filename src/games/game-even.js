import readlineSync from 'readline-sync';
import { getRandomNumber, isInputYesNo } from '../index.js';
import brainGreeting from './game-greeting.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Проверяет ответ пользователя.
// Если число четное и ответ 'yes', возвращает true, иначе - false.
const isCorrectAnswer = (number, answer) => {
  const userAnswer = isInputYesNo(answer);

  if (userAnswer === null) {
    return false;
  }

  if ((number % 2 === 0) && (userAnswer === 'yes')) {
    return true;
  }

  if ((number % 2 !== 0) && (userAnswer === 'no')) {
    return true;
  }

  return false;
};

// --------------------------------------------------
// Игра "Brain even"
// --------------------------------------------------

const brainEven = (maxRandomNumber) => {
  // Приветствуем игрока.
  const userName = brainGreeting();

  // Начинаем игру.
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Гененерируем случайное целое число в заданном диапазоне.
    const randomNumber = getRandomNumber(maxRandomNumber);
    console.log(`Question: ${randomNumber}`);

    // Запрашиваем отет игрока.
    const userAnswer = readlineSync.question('Your answer: ');

    // Если ответ неверный, завершаем игру.
    if (!isCorrectAnswer(randomNumber, userAnswer)) {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);

      return;
    }

    // Если ответ верный, продолжаем.
    console.log('Correct!');
  }

  // Игрок победил.
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
