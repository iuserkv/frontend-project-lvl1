#!/usr/bin/env node

import { getUserName } from '../src/index.js';

// Начало игры.
console.log('Welcome to the Brain Games!');

// Запрашиваем имя игрока и выводим приветствие.
const userName = getUserName();
console.log(`Hello, ${userName}!`);

export default userName;
