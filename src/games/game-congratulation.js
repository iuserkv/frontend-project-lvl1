import { getUserName } from '../index.js';

// --------------------------------------------------
// Привествие игры "Brain games"
// --------------------------------------------------

const brainCongratulation = () => {
  // Привествествуем.
  console.log('Welcome to the Brain Games!');

  // Запрашиваем имя игрока.
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default brainCongratulation;
