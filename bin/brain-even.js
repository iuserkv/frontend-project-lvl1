#!/usr/bin/env node

import brainEven from '../src/games/game-even.js';

// --------------------------------------------------
// Запускаем игру "Brain even"
// --------------------------------------------------

// Максимальное целое случайное число,
// предлагаемое игроку.
const maxRandomNumber = 100;

brainEven(maxRandomNumber);
