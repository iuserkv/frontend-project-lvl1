import { getRandomNumber } from '../index.js';
import { countRounds, maxRandomNumber, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

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


// --------------------------------------------------
// Игра "Brain prime"
// --------------------------------------------------

const brainPrime = () => {
  const typeOfGame = 'prime';
  // Формируем данные для 3-х раундов.
  const rounds = [];
  for (let i = 0; i < countRounds; i += 1) {
    const randomNumber = getRandomNumber(maxRandomNumber);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const round = [randomNumber, correctAnswer];
    rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(typeOfGame, rounds);
};

export default brainPrime;
