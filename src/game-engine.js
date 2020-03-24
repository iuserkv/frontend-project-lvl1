import {
  sendMessage, getUserName, getAnswer, sendWrongMessage,
  inputToYesNo, inputToInt, isCorrectAnswer,
} from './index.js';


// --------------------------------------------------
// Движок игр
// --------------------------------------------------

const countRounds = 3; // число раундов для всех игр
const maxRandomNumber = 100; // максимальное значение операндов в играх

const gameEngine = (typeOfGame, rounds) => {
  // Получаем имя пользоватя и приветствуем игрока.
  sendMessage('Welcome to the Brain Games!');
  const userName = getUserName();
  sendMessage(`Hello, ${userName}!`);

  let userAnswer = null;
  let correctAnswer = null;

  // Начинаем серию из нескольких раундов для выбранной игры.
  for (let i = 0; i < countRounds; i += 1) {
    switch (typeOfGame) {
      case 'calc': {
        // Получаем параметры игры.
        const [number1, number2, operation] = rounds[i];
        // Предлагаем пользователю ответить на вопрос игры.
        sendMessage('What is the result of the expression?');
        sendMessage(`Question: ${number1} ${operation} ${number2}`);
        // Запрашиваем ответ игрока.
        userAnswer = inputToInt(getAnswer());
        correctAnswer = rounds[i][rounds[i].length - 1];
        break;
      }
      case 'even': {
        const [randomNumber] = rounds[i];
        sendMessage('Answer "yes" if the number is even, otherwise answer "no".');
        sendMessage(`Question: ${randomNumber}`);
        userAnswer = inputToYesNo(getAnswer());
        correctAnswer = rounds[i][rounds[i].length - 1];
        break;
      }
      case 'gcd': {
        const [number1, number2] = rounds[i];
        sendMessage('Find the greatest common divisor of given numbers.');
        sendMessage(`Question: ${number1} ${number2}`);
        userAnswer = inputToInt(getAnswer());
        correctAnswer = rounds[i][rounds[i].length - 1];
        break;
      }
      case 'prime': {
        const [randomNumber] = rounds[i];
        sendMessage('Answer "yes" if given number is prime. Otherwise answer "no".');
        sendMessage(`Question: ${randomNumber}`);
        userAnswer = inputToYesNo(getAnswer());
        correctAnswer = rounds[i][rounds[i].length - 1];
        break;
      }
      case 'progression': {
        const [sequence] = rounds[i];
        sendMessage('What number is missing in the progression?');
        sendMessage(`Question: ${sequence.join(' ')}`);
        userAnswer = inputToInt(getAnswer());
        correctAnswer = rounds[i][rounds[i].length - 1];
        break;
      }
      default:
        return;
    }

    // Если ответ неверный, сообщаем об этом и завершаем игру.
    if (!isCorrectAnswer(correctAnswer, userAnswer)) {
      sendWrongMessage(correctAnswer, userAnswer, userName);
      return;
    }

    // Если ответ верный, продолжаем.
    sendMessage('Correct!');
  }

  // Если игрок победил, выводим поздравление.
  sendMessage(`Congratulations, ${userName}!`);
};

export { countRounds, maxRandomNumber, gameEngine };
