const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(helmet());
server.use(morgan("common"));
server.use(cors());
server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));

server.get("/", (req, res) => {
	res.json({ server: "Up and running! Let's make a dope API!  Start testing!" });
});

module.exports = server;
