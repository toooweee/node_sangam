const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Projects Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
