import { getUserName } from '../index.js';

// --------------------------------------------------
// Привествие игры "Brain games"
// --------------------------------------------------

const brainGreeting = () => {
  // Привествествуем.
  console.log('Welcome to the Brain Games!');

  // Запрашиваем имя игрока.
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default brainGreeting;
