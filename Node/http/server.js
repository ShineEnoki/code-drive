const http = require('http');

const port = '8000';
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead('200');
    res.end('<h2>My first version of server</h2>')
});

server.listen(port, host, () => {
    console.log(`Server is running on port: ${port} and host: ${host}`);
});