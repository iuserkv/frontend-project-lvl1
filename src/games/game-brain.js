import {
  WIN_GAME, LOSE_GAME,
  greetingUser, congratulationUser,
} from '../index.js';

import brainCalc from './game-calc.js';
import brainEven from './game-even.js';
import brainGcd from './game-gcd.js';
import brainPrime from './game-prime.js';
import brainProgression from './game-progression.js';

// --------------------------------------------------
// Точка входа в игры
// --------------------------------------------------

const gameBrain = (typeGame) => {
  let result = LOSE_GAME;

  // Задаем максимальное значение для величин,
  // используемых в играх.
  const maxRandomNumber = 100;

  // Приветствуем игрока и получаем его имя.
  const userName = greetingUser();

  // Запускаем указанную игру.
  switch (typeGame) {
    case 'calc':
      result = brainCalc(userName, maxRandomNumber);
      break;
    case 'even':
      result = brainEven(userName, maxRandomNumber);
      break;
    case 'gcd':
      result = brainGcd(userName, maxRandomNumber);
      break;
    case 'prime':
      result = brainPrime(userName, maxRandomNumber);
      break;
    case 'progression':
      result = brainProgression(userName, maxRandomNumber);
      break;
    default:
  }

  // Если игрок победил, выводим поздравление.
  if (result === WIN_GAME) {
    congratulationUser(userName);
  }

  return result;
};

export default gameBrain;
