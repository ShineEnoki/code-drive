var http = require('http');
// let os = require('os');
// let fs = require('fs');
// const dns = require('dns');  


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World/n');
}).listen(8000);
console.log("%c Server is running on port 8000","color:blue;font-size:50px");
// console.log(__dirname);


// let freeMemByte = os.freemem();
// let freeMemGib = freeMemByte / (1025**3);
// console.log(freeMemGib);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());

// fs.readFile('demo.txt', function (err, data) {
//     if (err) {
//         console.log("There was an error");
//     } else {
//     console.log("The data is/n"+data);
//     }
// })

// dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
//   console.log('addresses:', addresses);  
//   console.log('family:',family);  
// });  