import {
  WIN_GAME, LOSE_GAME,
  sendMessage, getUserName,
} from './index.js';

import brainCalc from './games/game-calc.js';
import brainEven from './games/game-even.js';
import brainGcd from './games/game-gcd.js';
import brainPrime from './games/game-prime.js';
import brainProgression from './games/game-progression.js';

// --------------------------------------------------
// Точка входа в игры
// --------------------------------------------------

const brainGames = (typeGame) => {
  let result = LOSE_GAME;

  // Задаем максимальное значение для величин,
  // используемых в играх.
  const maxRandomNumber = 100;

  // Получаем имя пользоватя и приветствуем игрока.
  sendMessage('Welcome to the Brain Games!');
  const userName = getUserName();
  sendMessage(`Hello, ${userName}!`);

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
    sendMessage(`Congratulations, ${userName}!`);
  }

  return result;
};

export default brainGames;
