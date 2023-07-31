let dns = require('dns');

dns.resolve4('www.miu.edu', (err, ip)=> {
    console.log('ip address: %j', ip);
})