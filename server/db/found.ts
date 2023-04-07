import connection from './connection'
import { FoundAnimalData } from '../../common/foundAnimal'

export function getAllFound(db = connection) {
  return db('found').select()
}

export function createFound(foundObj: FoundAnimalData, db = connection) {
  return db('found')
    .insert({
      species: foundObj.species,
      photo: foundObj.photo,
      user_name: foundObj.user_name,
      user_contact: foundObj.user_contact,
    })
    .returning([
      'id',
      'species',
      'photo',
      'user_id',
      'user_name',
      'user_contact',
    ])
}
