Один запрос — один ответ: 
- В каждом обработчике маршрута (route handler) ты должен отправить ровно один ответ клиенту. Это может быть JSON, текст, HTML и т.д. Как только ответ отправлен, Express завершает обработку запроса.
- Отправка ответа: Метод res.status(код).json(данные) задает статус HTTP и отправляет данные клиенту. После этого запрос считается завершенным.
- Роль return: Используется, чтобы выйти из функции после отправки ответа и не дать выполниться лишнему коду, который может попытаться отправить еще один ответ (а это вызовет ошибку "Headers already sent").

Разберемся чуть в коде. Было так: 
```javascript
const getBookById = async(req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    
    if (!book) {
      res.status(404).json({ message: "Book not found"})
    }
    
    res.status(200).json(book)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message})
  }
}
```

Вроде, корректно все выглядит, однако, если книга не найдена, то
мы делаем `res.status(404).json({ message: "Book not found"})`, что приведет к ошибке.
Это потому что после этого if снизу есть код, который также попытается выполниться.
Поэтому, нужно добавить return в этом if:

```javascript
if (!book) {
  return res.status(404).json({ message: "Book not found" });
}
res.status(200).json(book);
```

### Итог
- return res.status() — для выхода из функции после ответа, если дальше есть код.
- Просто res.status() — если после ответа функция сама завершится.
- Без return — когда нет риска двойного ответа и код простой.