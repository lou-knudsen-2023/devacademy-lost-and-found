import connection from './connection'
import { LostAnimal } from '../../common/lostAnimal'

export function getAllLost(db = connection) {
  return db('lost').select()
}

export function createLost(lostObj: LostAnimal, db = connection) {
  return db('lost')
    .insert({
      name: lostObj.name,
      species: lostObj.species,
      photo: lostObj.photo,
      user_id: lostObj.user_id,
      user_name: lostObj.user_name,
      user_contact: lostObj.user_contact,
    })
    .returning([
      'id',
      'name',
      'species',
      'photo',
      'user_id',
      'user_name',
      'user_contact',
    ])
}

export function getOneLostAnimal(id: number, db = connection) {
  return db('lost').first().where('id', id)
}

export function updateLostAnimal(
  id: number,
  updatedLostAnimal: LostAnimal,
  db = connection
): Promise<LostAnimal[]> {
  return db('lost')
    .update({ ...updatedLostAnimal })
    .returning([
      'id',
      'name',
      'species',
      'photo',
      'user_id',
      'user_name',
      'user_contact',
    ])
    .where('id', id)
}
