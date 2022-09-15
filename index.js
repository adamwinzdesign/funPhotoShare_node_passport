require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(port, () =>
	console.log(
		`** Server is up on port ${port}! **\nActivate Interlock!\nDynotherms Connected!\nInfracells Up!\nMegathrusters are go!`
	)
);
