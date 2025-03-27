const fetchData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users");
};

fetchData()
  .then((data) => data.json())
  .then((json) => console.log(json));
