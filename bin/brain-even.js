#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { getRandomNumber, checkInput } from '../src/index.js';
import userName from './brain-games.js';

// Проверяет ответ пользователя.
// Если число четное и ответ 'yes', возвращает true, иначе - false.
const isCorrectAnswer = (number, answer) => {
  const userAnswer = checkInput(answer);

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

// Игра.
const brainEven = (maxRandomNumber) => {
  // Выводим правила игры.
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Даем игроку три попытки ответить.
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(maxRandomNumber);
    console.log(`Question: ${randomNumber}`);

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

// Задаем параметры игры и запускаем ее.
const maxRandomNumber = 100; // Максимальное гененрируемое случайное число.

brainEven(maxRandomNumber);
