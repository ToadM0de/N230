const http = require("http");

function app(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Toad</h1>");
    res.end();
}

const server = http.createServer(app);

const port = process.env.PORT || 3445;
server.listen(port);

console.log(`http://localhost:${port}`);