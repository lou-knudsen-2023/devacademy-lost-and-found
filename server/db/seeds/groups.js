/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = (knex) => {
  return knex('groups').insert([
    {id: 5, name: 'Group One', },
    {id: 6, name: 'Group Two', },
  ]);
};
