import readlineSync from 'readline-sync';
import { getRandomNumber, strToInt } from '../index.js';
import brainGreeting from './game-greeting.js';

// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

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
// Игра "Brain gcd"
// --------------------------------------------------

const brainGcd = (maxRandomNumber) => {
  // Приветствуем игрока.
  const userName = brainGreeting();

  // Начинаем игру.
  console.log('Find the greatest common divisor of given numbers.');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    // Получаем два числа их наибольший общий делитель.
    const number1 = getRandomNumber(maxRandomNumber);
    const number2 = getRandomNumber(maxRandomNumber);
    const correctValue = getGcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);

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

export default brainGcd;
