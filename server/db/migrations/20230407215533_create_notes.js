/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.text('description')
    table.string('category').defaultTo(null)
    table.string('group_id').defaultTo(null)
    table.string('added_by_user')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('notes')
}
