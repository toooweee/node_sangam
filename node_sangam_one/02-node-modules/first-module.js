function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by 0 is not allowed");
  }

  return a / b;
}

module.exports = {
  add,
  divide,
  subtract,
};

/**
 * Затем ты присваиваешь module.exports объект, у которого есть свойства add, subtract и divide.
 * Эти свойства ссылаются на твои функции.
 * Теперь этот объект с функциями можно импортировать в другом файле.
 */
