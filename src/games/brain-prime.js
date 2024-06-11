import { getRandomNumber, isPrimeNumber } from "../engine.js";
import { startBrainGames } from "../index.js";

const beginsGreet = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const main = () => {
  const number = getRandomNumber(1, 100);
  const question = number;
  const correctAnswer = isPrimeNumber(number) ? 'yes' : 'no';
  return [question, correctAnswer];
}

const runGamePrime = () => startBrainGames(beginsGreet, main);
export default runGamePrime;