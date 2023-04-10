import request from 'superagent'
import {NotesData, Note} from '../../models/NotesMods'
const notesUrl = '/api/v1/notes'


  //*******************Get all
export function fetchNotesAPI(){
    return request
    .get(notesUrl)
    .then((res) => {return res.body})
    .catch((err) => {return err.message})
}



  //*******************Get single
export function getNoteAPI(id: number){
  const url = `${notesUrl}/${id}`;
  return request
  .get(url)
  .then((res) => {return res.body})
  .catch((err) => {return err.message})
}

 //*******************Make new
 //The server-side endpoint expects an access token to be present in the request, which is used to authenticate and authorize the user making the request.
 //By passing the token as an argument to the makeNewAPI function, the access token is included in the HTTP request headers, allowing the server to verify the user's identity and grant them access to the requested resource.
 export function makeNewAPI(newThing: NotesData, token:string): Promise<NotesData[]>{
  console.log(newThing)
    return request
    .post(notesUrl)
    .set('Authorization', `Bearer ${token}`)
    .send(newThing)
    .then((res) => {return res.body})
}


  //*******************Edit existing
  export function updateNoteAPI(id:number,obj:NotesData): Promise<NotesData>{
    return request
    .patch(`${notesUrl}/${id}`)
    .send(obj)
    .then((res) => {return res.body})

}

   //*******************Delete existing
   export function delNoteAPI(id:number){
    return request
    .delete(`${notesUrl}/${id}`)
    .then((res) => {return res.body})
}