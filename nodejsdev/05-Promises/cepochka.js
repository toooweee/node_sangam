const status = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }

  return Promise.reject(response);
};

const json = (response) => response.json();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(status)
  .then(json)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
