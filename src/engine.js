// Проверка четности
export const isEven = (number) => {
  return number % 2 === 0;
};

// Генерация случайного числа
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Общий делитель
export const getGcd = (firstNum, secondNum) => {
  while (secondNum !== 0) {
    const temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
};

//Cоздание прогрессии
export const getProgression = (start, length, step) => {
  const result = [];
  let current = 0;
  while (current <= length) {
    result.push(start + current * step);
    current += 1;
  }
  return result;
};

//Простое или нет число
export const isPrimeNumber = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
