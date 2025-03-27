const f1 = fetch("https://jsonplaceholder.typicode.com/users");
const f2 = fetch("https://jsonplaceholder.typicode.com/todos");

Promise.all([f1, f2])
  .then((responses) =>
    // Обрабатываем оба ответа параллельно
    Promise.all(responses.map((res) => res.json())),
  )
  .then(([users, todos]) => {
    console.log("Users:", users);
    console.log("Todos:", todos);
  })
  .catch((error) => console.error("Error:", error));
