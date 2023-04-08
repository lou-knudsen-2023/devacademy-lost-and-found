//DATABASE
import connection from './connection'
import {NotesData} from '../../models/NotesMods'


  //*******************Get all
export function getAllNotesDB(db = connection): Promise<NotesData[]>{
    return db('notes').select()
}


 //*******************Make new
export function createNewNoteDB (
    formdata:NotesData,
    db = connection
) : Promise<NotesData[]> {
    return db('notes').insert(formdata)
    .returning('*')
}

//Edit existing

export function updateNoteDB(
    id: number,
    data: NotesData,
    db = connection
  ): Promise<NotesData[]> {
    return db('notes')
      .where('id', id)
      .update(data)
      .returning('*')
  }



//Delete
export function delNoteDB (id:number, db = connection): Promise<number>  {
    return db('notes')
    .delete()
    .where('id', id)
}