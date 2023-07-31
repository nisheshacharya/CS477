const http = require('http');
const fs = require('fs');
const path = require('path');
const file = path.join('.', 'files', 'img.jpeg')

const readable = fs.readFileSync(file);

http.createServer( (req, res)=>{
    res.write(readable);
    res.end();
}).listen(3100, ()=> console.log('Listening on 3100'))