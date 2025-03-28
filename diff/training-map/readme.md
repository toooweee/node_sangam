### Стрелочные функции: 
Когда мы пишем стрелочные функции с телом в одну строку, 
скобки вокруг возвращаемого объекта обязательны.

Круглые скобки () в стрелочной функции позволяют вернуть объект без использования return, но только если функция состоит из одного выражения.

#### Как это работает

`Стрелочные функции с одним выражением`: если тело функции - одно выражение, 
его результат автоматически возвращается.

```javascript
// Пример с числом:
const sum = (a, b) => a + b;
// return не нужен, результат a + b  вернется сам
```

`Возврат объекта` - нужны скобки, фигурные скобки конфликтуют с синтаксисом тела функции.
```javascript
// неправильн (думает, что это тело функции)
const getUser = () => {
  name: "Alex"
}
// правильно, (скобки указывают, что это - объект)
const getUser = () => ({
  name: "Alex"
})
```

### Итого: 
💡 Как запомнить:

- **_Хочешь вернуть объект в одну строку?_** → Оберни его в ()
- **_Есть несколько операций?_** → Используй {} и return

