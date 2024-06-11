// Проверка четности
export const isEven = (number) => {
  return number % 2 === 0
}

// Генерация случайного числа 
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}