import connection from './connection'

interface foundPet {
  species: string
  photo: string
  user_id: string
  user_name: string
  user_contact: string
}

//gets all found pets and returns them
export function getAllFound(db = connection) {
  return db('found').select()
}

//sends found Pet with matching ID into found table
export async function makeFound(id: number, db = connection) {
  try {
    const foundPet = await db('found').select().where('id', id).first()
    if (foundPet) {
      await db('found').insert(foundPet)
      await db('found').where('id', id).del()
      return true //indicates pet was successfully moved
    }
    return false //indicates pet was not moved
  } catch (error) {
    throw new Error(`An error occured while making pet found: ${error.message}`)
  }
}

//creates a new found pet and returns their info
export function createFound(foundObj: foundPet, db = connection) {
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
