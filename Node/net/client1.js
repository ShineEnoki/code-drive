const net = require('net');

const client = net.Socket();

const host = '127.0.0.1';
const port = '8000';


client.connect(port , host, ()=>{
    console.log("Connected to Server");
    client.write("Hello from the client" + client.address().address);
});

client.on('data', data => {
    console.log("Server says " + data);
});

client.on('close', ()=> {
    console.log("Client disconnected");
});