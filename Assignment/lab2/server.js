const http = require('http');
const fs = require('fs');
const path = require('path');
const file = path.join('.','files', 'img.jpeg')


http.createServer((request,response)=>{
   const readstream = fs.createReadStream(file, {highWaterMark:1600});
   readstream.pipe(response);

}).listen(3500)
