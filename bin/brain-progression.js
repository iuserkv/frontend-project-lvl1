#!/usr/bin/env node

import brainProgression from '../src/games/game-progression.js';

// --------------------------------------------------
// Запускаем игру "Brain progression"
// --------------------------------------------------

// Максимальное число с которого может начинаться прогрессия.
const maxRandomNumber = 100;

brainProgression(maxRandomNumber);
