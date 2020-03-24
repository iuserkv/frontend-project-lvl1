import { getRandomNumber } from '../index.js';
import { countRounds, maxRandomNumber, gameEngine } from '../game-engine.js';


// --------------------------------------------------
// Вспомогательные функции
// --------------------------------------------------

// Возвращает true, если number четное, иначе, false.
const isEven = (number) => number % 2 === 0;


// --------------------------------------------------
// Игра "Brain even"
// --------------------------------------------------

const brainEven = () => {
  const typeOfGame = 'even';
  // Формируем данные для 3-х раундов.
  const rounds = [];
  for (let i = 0; i < countRounds; i += 1) {
    const randomNumber = getRandomNumber(maxRandomNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const round = [randomNumber, correctAnswer];

    rounds.push(round);
  }

  // Запускаем движок.
  gameEngine(typeOfGame, rounds);
};

export default brainEven;
