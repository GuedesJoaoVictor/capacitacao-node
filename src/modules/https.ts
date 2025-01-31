import htttp from "http";

interface User {
  name: string;
  email: string;
}

const PORT = 8080;

const server = htttp.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page</h1>");
    return;
  }

  if (req.url === "/users") {
    const users: User[] = [
      {
        name: "John Doe",
        email: "jhon@email.com",
      },
      {
        name: "Jane Doe",
        email: "jane@email.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }

  res.write("Hello World!");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
