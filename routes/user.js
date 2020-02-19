const express = require("express");
const userController = require("../controllers/userController");
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json({ type: 'application/json' }));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

