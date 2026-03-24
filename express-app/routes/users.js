const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    items: [
      {
        "id": 1,
        "name": "Вова"
      },
      {
        "id": 2,
        "name": "Никита"
      }
    ]
  });
});

/* POST create user. */
router.post('/', function(req, res, next) {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
