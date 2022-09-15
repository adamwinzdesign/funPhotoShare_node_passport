require("dotenv").config();

exports.seed = function (knex) {
	return knex("users")
		.truncate()
		.then(function () {
			return knex("users").insert({
				username: process.env.SEED_USERNAME,
				password: process.env.SEED_PASSWORD,
				email: process.env.SEED_EMAIL,
				status: process.env.SEED_STATUS,
				location: process.env.SEED_LOCATION,
			});
		});
};
