const express = require("express");
const { validate } = require("./validation/validation_login_register");
const server = express();
server.use(express.json());

server.post("/register", (req, res) => {
  const validationRes = validate(req.body);

  if (validationRes.error) {
    return res.sendStatus(400);
  }

  res.sendStatus(201);
});

server.post("/login", (req, res) => {
  const validationRes = validate(req.body);

  if (validationRes.error) {
    return res.sendStatus(400);
  }

  res.sendStatus(200);
});

exports.server = server;
