/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = (knex) => {
  return knex('groups').insert([
    {id: 3, name: 'Group One', },
    {id: 4, name: 'Group Two', },
  ]);
};
