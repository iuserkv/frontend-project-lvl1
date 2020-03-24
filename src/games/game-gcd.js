import { getRandomNumber } from '../index.js';
import { countRounds, maxRandomNumber, gameEngine } from '../game-engine.js';


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


// --------------------------------------------------
// Игра "Brain gcd"
// --------------------------------------------------

const brainGcd = () => {
  const typeOfGame = 'gcd';
  // Формируем данные для 3-х раундов.
  const rounds = [];
  for (let i = 0; i < countRounds; i += 1) {
    const number1 = getRandomNumber(maxRandomNumber);
    const number2 = getRandomNumber(maxRandomNumber);
    const correctAnswer = getGcd(number1, number2);
    const round = [number1, number2, correctAnswer];

    rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(typeOfGame, rounds);
};

export default brainGcd;
