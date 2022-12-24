const https = require('https');
const fs = require('fs');

let option = {
    hostname: 'en.wikipedia.org',
    port: 443,
    path: '/wiki/Sachin_Tendulkar',
    method: "GET",
};

let callback = (res) =>{
    let resBody = '';
    console.log("Respond from server started.");
    console.log(`Respond status: ${res.statusCode}`);
    console.log(`Respond Header: ${res.headers}`);
    res.setEncoding('UTF-8');

    res.on('data', (chunk)=>{
        console.log(` --data length-- ${chunk.length}`);
        resBody += chunk;
    })

    res.on('end', ()=> {
        fs.writeFile("SachinTendulkar.html", resBody, (err)=>{
            if(err) throw error;
            console.log("File is downloaded");
        });
    });

};

let request = https.request(option, callback);



request.on('err', (err)=>{
    console.log(err.message)
});

request.end();