import request from 'superagent'
import {NotesData} from '../../models/NotesMods'
const notesUrl = '/api/v1/notes'


  //*******************Get all
export function fetchNotesAPI(){
    return request
    .get(notesUrl)
    .then((res) => {return res.body})
    .catch((err) => {return err.message})

}

 //*******************Make new
 export function makeNewAPI(newThing: NotesData){
    return request
    .post(notesUrl)
    .send(newThing)
    .then((res) => {return res.body})


}
  //*******************Edit existing
  export function updateNote(id:number,obj:NotesData): Promise<NotesData>{
    return request
    .patch(notesUrl)
    .send(obj)
    .then((res) => {return res.body})

}

   //*******************Delete existing
   export function delNoteAPI(id:number){
    return request
    .delete(`${notesUrl}/${id}`)
    .then((res) => {return res.body})
}