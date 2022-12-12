const net = require('net');

const host = '127.0.0.1';
const port = '8000';


const server = net.createServer();

server.listen(port , host, () => 
    console.log(`TCP server is running on port:${port} of ip:${host}`)
)

let sockets = [];

server.on('connection', function(sock){
    console.log('DATA ' + sock.remoteAddress + ':' + sock.remotePort);

    sockets.push(sock);

    sock.on('data', function(data){
        console.log("[+]DATA" + sock.remoteAddress + "get: " + data);
        sockets.forEach(function(sock, index, array){
            sock.write(sock.remoteAddress + ":" + sock.remotePort + " said" + data + "\n")
            sock.write("Close? \n")
        })
    });

    sock.on('close', function(data){
        let index = sockets.findIndex( o => {
            return sock.remoteAddress === o.remoteAddress && sock.remotePort === o.remotePort;
        });

        if (index !== -1) sockets.splice(index, 1);
        console.log("CLOSE : " + sock.remoteAddress + " " + sock.remotePort)
    });
})
