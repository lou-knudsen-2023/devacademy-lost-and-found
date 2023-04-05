/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('found', (table) => {
    table.increments('id').primary()
    table.string('species')
    table.string('photo')
    table.string('user_id')
    table.string('user_name')
    table.string('user_contact')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('found')
}
