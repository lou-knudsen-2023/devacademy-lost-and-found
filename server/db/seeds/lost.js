/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('lost').del()
    await knex('lost').insert([
      { id: 1, name: 'human skills', species: 'dog', photo: 'images/dogs/dog1.jpg', user_id: "1", user_name: 'bob', user_contact: 'randoman@gmail.com'},
      { id: 2, name: 'pikel', species: 'cat', photo: 'images/dogs/cat1.jpg', user_id: "2", user_name: 'jerry', user_contact: 'tom.jerry@gmail.com'},
      { id: 3, name: 'pickle', species: 'dog', photo: 'images/dogs/dog2.jpg', user_id: '3', user_name: 'jeff', user_contact: 'jeffy@gmail.com'},
      { id: 4, name: 'generic cat', species: 'cat', photo: 'images/dogs/cat2.jpg', user_id: '4', user_name: 'geoffrey', user_contact: 'dragons@gmail.com'},
    ])
  }