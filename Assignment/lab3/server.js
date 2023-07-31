const http = require('http');

http.createServer((req, res) => {
    const msg = 'Server created';
    res.end(msg)

}).listen(3000)