const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(helmet());
server.use(express.json());

server.get("/hello", (req, res) => {
  res.json("hello, there");
});

server.use("*", (req, res) => {
  res.json({ message: "API is UP!" });
});

module.exports = server;