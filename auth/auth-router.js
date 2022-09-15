const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/usersModel.js");
const { jwtSecret } = require("../config/secrets");

// register
router.post("/register", (req, res) => {
	const user = req.body;

	const hash = bcrypt.hashSync(user.password, 12);
	user.password = hash;

	Users.add(user)
		.then((user) => {
			const token = generateToken(user);
			res.status(201).json({
				message: `Welcome, ${user.username}!`,
				id: user.id,
				username: user.username,
				user_status: user.status,
				user_location: user.location,
				token,
			});
		})
		.catch((error) => {
			res.status(500).json({ message: "Error registering!", error });
		});
});

function generateToken(user) {
	const payload = {
		username: user.username,
		userId: user.id,
		role: user.role || "user",
	};

	const options = {
		expiresIn: "168h",
	};

	return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
