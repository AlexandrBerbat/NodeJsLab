const PORT = process.env.PORT || 3000;
const http = require('http')
const fs = require("fs");
const server = http.createServer((req, response) => {
 response.statusCode = 200
 response.setHeader("Content-Type", "text/html")
 fs.readFile("./laba12.html", null, (error, data) => {
  if (error) {
    response.writeHead(404);
    response.write("Whoops! File not found!");
  } else {
    response.write(data);
  }
  response.end();
  });
})
server.listen(PORT, () => {
 console.log(`Server running`)
})