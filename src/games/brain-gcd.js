import { getRandomNumber, getGcd } from "../engine.js";
import { startBrainGames } from "../index.js";

const beginsGreet = 'Find the greatest common divisor of given numbers.'

const main = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getGcd(firstNum, secondNum);
  return [question, String(correctAnswer)];
}

const runGameGcd = () => startBrainGames(beginsGreet, main);
export default runGameGcd;