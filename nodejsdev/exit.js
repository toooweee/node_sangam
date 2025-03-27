// Основной модуль process предоставляет удобный метод, который позволяет нам программно выйти из программы
// process.exit()

//
// const express = require('express');
// const app = express();
//
// app.get('/', (req, res) => {
//   res.send('Hi!');
// });
//
// app.listen(3000, () => console.log('Server ready'));

// Код выше никогда не завершится, Если вы вызовете process.exit(), то если у нас выполнялись
// какие-либо транзакции, запросы, работа с файлами и тп, то они будут немедленно прерваны.
// Нехорошо

// Чтобы сделать все круто, нам нужно послать команде сигнал SIGTERM, и обработать его с
// помощью сигнала процесса

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

const server = app.listen(3000, () => {
  console.log("Server started on port 3000");
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server closed");
  });
});
