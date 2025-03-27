const fetchData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  return await data.json();
};

fetchData().then((json) => console.log(json));
