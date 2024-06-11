import { getRandomNumber, getProgression } from "../engine.js";
import { startBrainGames } from "../index.js";

const beginsGreet = 'What number is missing in the progression?'

const main = () => {
  const start = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 5);
  const progression = getProgression(start, length, step);
  const missingIndex = getRandomNumber(0, length - 1)
  const hidden = progression[missingIndex]
  progression[missingIndex] = '..'

  const question = progression.join(' ');
  const correctAnswer = hidden;
  return [question, String(correctAnswer)];
}

const runGameProgression = () => startBrainGames(beginsGreet, main);
export default runGameProgression;