const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server using the http module.

const server = http.createServer((req, res) => {

  // Check the incoming request URL.

  if (req.url === '/get-image') {

    // Get the absolute path of the image file.

    const imagePath = path.join(__dirname, 'uploads', 'image.png');

    // Check if the image file exists.

    if (fs.existsSync(imagePath)) {

      // Read the image file as binary data.

      const imageData = fs.readFileSync(imagePath);

      // Set the appropriate Content-Type header for the image.

      res.setHeader('Content-Type', 'image/png');

      // Send the image data in the response.

      res.end(imageData);

    } else {

      // If the image file doesn't exist, return a 404 Not Found status.

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Image not found.');
    }

  } else {

    // For any other request, return a 404 Not Found status.

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found.');
  }
});

// Start the server.

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});