/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = (knex) => {
  return knex('groups').insert([
    {id: 1, name: 'Group One', },
    {id: 2, name: 'Group Two', },
  ]);
};
