import { getRandomNumber } from "../engine.js";
import { startBrainGames } from "../index.js";

const beginsGreet = "What is the result of the expression?";

const doArithmetic = (num1, num2, operator = "+") => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }
};

const main = () => {
  const symbols = ["*", "-", "+"];
  const numFirst = getRandomNumber(1, 100);
  const numSecond = getRandomNumber(1, 100);
  const symbol = symbols[getRandomNumber(0, 2)];

  const question = `${numFirst} ${symbol} ${numSecond}`;
  const correctAnswer = doArithmetic(numFirst, numSecond, symbol);
  return [question, String(correctAnswer)];
};

const runGameCalc = () => startBrainGames(beginsGreet, main);
export default runGameCalc;
