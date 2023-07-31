const fs = require('fs');
const path = require('path')
const zlib = require('zlib')

const file = path.join(__dirname,'pic.jpg');
const zipper = zlib.createGzip(); 

const readable = fs.createReadStream(file);
const compress = fs.createWriteStream('zipped.gz');
readable.pipe(zipper).pipe(compress);


//Unzip
const zippedfile = path.join(__dirname,'zipped.gz')
const unzipper = zlib.createGunzip();

const readzipped = fs.createReadStream(zippedfile);
const unzipped = fs.createWriteStream('unzipped');

readzipped.pipe(unzipper).pipe(unzipped);
