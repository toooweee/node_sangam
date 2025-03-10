// module.exports => export
// require => import

/**
 * Поскольку ты экспортировал объект с функциями, переменная firstModule теперь ссылается на этот объект.
 * Ты можешь вызывать функции как firstModule.divide или firstModule.subtract, потому что они стали свойствами объекта firstModule.
 */
const firstModule = require('./first-module.js')

console.log(firstModule.divide(1, 1))
console.log(firstModule.subtract(1, 1))

try {
  console.log(firstModule.divide(0, 1))
} catch (e) {
  console.log(e.message)
}

// module wrapper
// (
//   function (exports, require, module, __filename, __dirname) {
//
//   }
// )