const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/products.html');
});

router.post('/', (req, res) => {
  const { name, price } = req.body;
  res.send(`POST: Product created with name "${name}" and price "${price}"`);
});

module.exports = router;
