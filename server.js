const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello world");
});

server.listen(port, ()=>{
    console.log("He arrancado en el puerto" + port);
});
