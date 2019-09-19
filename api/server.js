const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const labbyRouter = require("../labby/labby-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/labby", labbyRouter);

server.get("/", (req, res) => {
  res.send(`IT'S WORKING, IT'S WORKING!`);
});

module.exports = server;
