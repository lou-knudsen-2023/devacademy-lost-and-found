import connection from './connection'
import { FoundAnimal } from '../../common/FoundAnimal'

//gets all found pets and returns them
export function getAllFound(db = connection) {
  return db('found').select()
}

//creates a new found pet and returns their info
export function createFound(foundObj: FoundAnimal, db = connection) {
  return db('found')
    .insert({
      species: foundObj.species,
      photo: foundObj.photo,
      user_id: foundObj.user_id,
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
