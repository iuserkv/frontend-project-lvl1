#!/usr/bin/env node

import brainCalc from '../src/games/game-calc.js';

// --------------------------------------------------
// Запускаем игру "Brain calc"
// --------------------------------------------------

// Максимальное гененрируемое случайное значение для операндов
// в заданном выражении.
const maxRandomNumber = 100;

brainCalc(maxRandomNumber);
