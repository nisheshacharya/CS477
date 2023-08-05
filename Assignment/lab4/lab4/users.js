const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/users.html');
});

router.post('/', (req, res) => {
  const { name, email } = req.body;
  res.send(`POST: User created with name "${name}" and email "${email}"`);
});

module.exports = router;
