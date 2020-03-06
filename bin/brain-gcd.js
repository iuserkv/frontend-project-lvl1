#!/usr/bin/env node

import brainGcd from '../src/games/game-gcd.js';

// --------------------------------------------------
// Запускаем игру "Brain gcd"
// --------------------------------------------------

// Максимальное гененрируемое случайное значение
// чисел для которых надо найти наибольший общий делитель.
const maxRandomNumber = 100;

brainGcd(maxRandomNumber);
