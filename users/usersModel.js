const userDB = require("../data/dbConfig.js");

module.exports = {
	add,
	findById,
	findBy,
	updateUser,
};

async function add(user) {
	const [id] = await userDB("users").insert(user);

	return findById(id);
}

function findById(id) {
	return userDB("users").where({ id }).select("username", "id", "status", "location").first();
}

function findBy(filter) {
	return userDB("users").where(filter);
}

async function updateUser(id, changes) {
	await userDB("users").where({ id }).update(changes);

	return findById(id);
}
