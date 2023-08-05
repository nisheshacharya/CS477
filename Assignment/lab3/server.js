const http = require('http');
const fs = require('fs');
const { URL } = require('url');

http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log('URL:' , url);

  if (url === '/') {
    res.write('<head><title>Enter Blog Post</title></head>');
    res.write('<body><form action="/messages" method="POST">');
    res.write('<input type="text" name="title" placeholder="Title"><br>');
    res.write('<textarea name="body" placeholder="Blog Body"></textarea><br>');
    res.write('<button type="submit">Submit</button></form></body>');
    res.end();
  } else if (url === '/messages' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URL(`https://localhost${parsedBody}`).searchParams;
      const title = params.get('title');
      console.log(title);
      const blogBody = params.get('body');
      const blogPost = `${title}\n\n${blogBody}`;

      // Save the blog post into a file named "blog_post.txt"
      fs.writeFile('blog_post.txt', blogPost, (err) => {
        if (err) {
          console.error(err);
          res.end('Error occurred while saving the blog post.');
        } else {
          res.write('<head><title>Save Successfully</title></head>');
          res.write('<body>');
          res.write('<h1>Save Successfully!</h1>');
          res.write('<a href="/">Back to Home Page</a>');
          res.write('</body>');
          res.end();
        }
      });
    });
  } else {
    res.end('Invalid URL');
  }
}).listen(3000);
