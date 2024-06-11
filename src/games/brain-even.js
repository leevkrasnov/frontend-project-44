import { isEven, getRandomNumber } from "../engine.js";
import { startBrainGames } from "../index.js";

const beginsGreet = 'Answer "yes" if the number is even, otherwise answer "no".'

const main = () => {
  let question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runGameEven = () => startBrainGames(beginsGreet, main);
export default runGameEven;