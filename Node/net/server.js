const net = require('net');

const host = '127.0.0.1';
const port = '8080';


const server = net.createServer();

server.listen(host, port, () => 
    console.log(`TCP server is running on port:${port} of ip:${host}`)
)

let sockets = [];

server.on('connection', function(sock){
    console.log('DATA' + sock.remoteAddress + ':' + sock.remotePort);

    sockets.push(sock);

    sock.on('data', function(data){
        console.log("DATA" + sock.remoteAddress + "get: " + data);
    })
})
