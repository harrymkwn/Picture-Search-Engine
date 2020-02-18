const express = require("express");
const router = express.Router();
const userModule = require("../modules/newuser");
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/person", async (req, res)=> {
  const user = await userModule.find({});

  try {
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/about", function(req, res) {
  res.send("this about page of user");
});

module.exports = router;
