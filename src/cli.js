import readlineSync from 'readline-sync';

const greetingName = () => {
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
}

export {greetingName};