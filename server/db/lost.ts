import connection from './connection'

//gets all lost pets and returns them
export function getAllLost(db = connection) {
    return db('lost').select()
}

//sends lost Pet with matching ID into found table
export async function makeFound(id: number, db = connection) {
    try{
        const lostPet = await db('lost').select().where('id', id).first()
        if (lostPet) {
            await db('found').insert(lostPet)
            await db('lost').where('id', id).del()
            return true //indicates pet was successfully moved
        }
        return false //indicates pet was not moved
    } catch(error) {
        throw new Error(`An error occured while making pet found: ${error.message}`)
    }
}