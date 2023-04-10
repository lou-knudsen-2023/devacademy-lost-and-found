import { useEffect, useState} from 'react';
import * as Models from "../../models/NotesMods";
import { fetchNotesAPI } from '../apis/notesAPI';
import { SingleNote } from './SingleNote';
import { AddNote } from "./AddNote"



export function AllNotes(){
  const [notes, setNotes] = useState([] as Models.Note[]);

  useEffect(() => {
    fetchNotesAPI()
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err.message));
  }, [])


  const refreshList = () => {
    fetchNotesAPI()
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err.message));
  }



  return (
    <div className="note-wrapper">
      {notes.map((note) => (
        //Pass the refreshList function as a prop to the SingleNote component
        <SingleNote key={note.id} note={note} showButton={true} refreshList={refreshList}/>
      ))}
     <AddNote refreshList={refreshList} />

    </div>
  )
}