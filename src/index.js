import readlineSync from 'readline-sync';

export const startBrainGames = (beginsGreet, main) => {
  //Приветствие пользователя перед началом игры
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(beginsGreet)

  //Основное тело игры
  let correctAnswers = 0
  const totalCorrectAnswers = 3
  let result = true

  while (correctAnswers < totalCorrectAnswers) {
    const [question, correctAnswer] = main();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)
      result = false
      break
    }
  }
  if (result === true) {
    console.log(`Congrutulations, ${userName}!`);
  }
}