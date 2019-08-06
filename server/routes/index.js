const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.get("/", (req, res, next) => {
  res.json({ msg: "Home" });
});

const sessionValidation = (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.json({ msg: "Necesitas iniciar sesión para continuar" });
  }
};

router.get("/dashboard", sessionValidation, (req, res, next) => {
  const id = req.session.currentUser;
  User.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => res.status(400).json(err));
});



module.exports = router;