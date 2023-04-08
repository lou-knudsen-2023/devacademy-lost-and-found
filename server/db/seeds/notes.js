/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = (knex) => {
  return knex('notes').insert([
    {id: 1, title: 'First Note', description:'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat, tempore dicta qui est quibusdam commodi iusto, fugit quisquam ad rem itaque facilis laboriosam delectus repellendus aliquid illum necessitatibus nulla.', category:'example', group_id:'1', added_by_user:'auth|01'   },

    {id: 2, title: 'Next Note', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat, tempore dicta qui est quibusdam commodi iusto, fugit quisquam ad rem itaque facilis laboriosam delectus repellendus aliquid illum necessitatibus nulla.', category:'other', group_id:'2', added_by_user:'auth|02'   },
  ]);
};