/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("users", (users) => {
		users.increments();

		users.string("username", 128).notNullable().unique();
		users.string("password", 128).notNullable();
		users.string("email", 128).notNullable();
		users.string("status", 64);
		users.string("location", 64);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists("users");
};
