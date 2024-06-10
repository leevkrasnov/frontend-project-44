import readlineSync from 'readline-sync';
import { create, all } from 'mathjs';

// Проверка четности
const isEven = (number) => {
  return number % 2 === 0
}

// Генерация случайного числа 
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Функция запуска игры четное/нечетное
const gameEven = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswers = 0
  const totalCorrectAnswers = 3
  let result = true
  while (correctAnswers < totalCorrectAnswers) {
    const num = getRandomNumber(1, 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    const rightAnswer = isEven(num) ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`)
      result = false
      break
    }
  }
  if (result === true) {
    console.log(`Congrutulations, ${name}!`);
  }
}

// Функция запуска игры калькулятор
const gameCalc = () => {
  console.log('Welcome to the Brain games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?')

  let correctAnswers = 0
  const totalCorrectAnswers = 3
  let result = true
  while (correctAnswers < totalCorrectAnswers) {
    const math = create(all)
    const symbols = ['*', '-', '+']
    const numFirst = getRandomNumber(1, 10);
    const numSecond = getRandomNumber(1, 10);
    const symbol = symbols[getRandomNumber(0, 2)]
    
    console.log(`Question: ${numFirst} ${symbol} ${numSecond}`);
    const userAnswer = parseInt(readlineSync.question('Your Answer: '));
    const rightAnswer = math.evaluate(`${numFirst} ${symbol} ${numSecond}`);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`)
      result = false
      break
    }
  }
  if (result === true) {
    console.log(`Congrutulations, ${name}!`);
  }
}

export { gameEven, gameCalc };