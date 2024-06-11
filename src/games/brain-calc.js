import { getRandomNumber } from "../engine.js";
import { startBrainGames } from "../index.js";
import { create, all } from 'mathjs';

const beginsGreet = 'What is the result of the expression?'

const main = () => {
  const math = create(all)
  const symbols = ['*', '-', '+']
  const numFirst = getRandomNumber(1, 10);
  const numSecond = getRandomNumber(1, 10);
  const symbol = symbols[getRandomNumber(0, 2)]
  const question = `${numFirst} ${symbol} ${numSecond}`
  console.log(typeof(question));
  const correctAnswer = math.evaluate(`${numFirst} ${symbol} ${numSecond}`);
  console.log(typeof(correctAnswer));
  return [question, String(correctAnswer)];
}

const runGameCalc = () => startBrainGames(beginsGreet, main);
export default runGameCalc;