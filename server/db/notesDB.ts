//DATABASE
import connection from './connection'
import {NotesData, Note} from '../../models/NotesMods'


  //*******************Get all
export function getAllNotesDB(db = connection): Promise<NotesData[]>{
    return db('notes').select()
}

  //*******************Get single
  export function getNoteDB(id:number, db = connection): Promise<Note>{
    return db('notes').where('id', id).first();
  }

 //*******************Make new
export function createNewNoteDB (
    formData:NotesData,
    db = connection
) : Promise<NotesData[]> {
    return db('notes').insert(formData)
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