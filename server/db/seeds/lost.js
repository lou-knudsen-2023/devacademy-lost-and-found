/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lost').del()
  await knex('lost').insert([
    {
      id: 1,
      name: 'Human Skills',
      species: 'Dog',
      photo: 'images/dogs/dog1.jpg',
      user_id: '1',
      user_name: 'Bob',
      user_contact: 'randoman@gmail.com',
    },
    {
      id: 2,
      name: 'Pixel',
      species: 'Cat',
      photo: 'images/cats/cat1.jpg',
      user_id: '2',
      user_name: 'Jerry',
      user_contact: 'tom.jerry@gmail.com',
    },
    {
      id: 3,
      name: 'Pickle',
      species: 'Dog',
      photo: 'images/dogs/dog2.jpg',
      user_id: '3',
      user_name: 'Jeff',
      user_contact: 'jeffy@gmail.com',
    },
    {
      id: 4,
      name: 'Generic Cat',
      species: 'Cat',
      photo: 'images/cats/cat2.jpg',
      user_id: '4',
      user_name: 'Geoffrey',
      user_contact: 'dragons@gmail.com',
    },
  ])
}
