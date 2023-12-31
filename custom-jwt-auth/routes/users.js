const mongoose = require("mongoose");
const router = require("express").Router();
const User = mongoose.model("User");
// const passport = require("passport");
const utils = require("../lib/utils");

// TODO
router.get("/protected", utils.authMiddleware, (req, res, next) => {
  console.log(req.jwt);
  res.status(200).json({ success: true, msg: "You are authorized" });
});

router.post("/login", function (req, res, next) {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        res.status(400).json({ sucess: false, msg: "could not find user" });
      }

      const isValid = utils.validPassword(
        req.body.password,
        user.hash,
        user.salt
      );

      if (isValid) {
        const tokenObject = utils.issueJWT(user);

        res.status(200).json({
          success: true,
          user: user,
          token: tokenObject.token,
          expresIn: tokenObject.expires,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "You entered the wrong credentials" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/register", function (req, res, next) {
  const saltHash = utils.genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
  });

  newUser
    .save()
    .then((user) => {
      const jwt = utils.issueJWT(user);
      res.json({
        success: true,
        user: user,
        token: jwt.token,
        expresIn: jwt.expires,
      });
    })
    .catch((err) => next(err));
});

module.exports = router;
