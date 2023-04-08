import { useEffect, useState} from 'react';
import * as Models from "../../models/NotesMods";
import { fetchNotesAPI } from '../apis/notesAPI';
import { SingleNote } from './SingleNote';
import { AddNote } from "./AddNote"



export function AllNotes(){
    const [notes, setNotes] = useState([] as Models.Note[]);


    //useEffect hook will run every time the notes state changes, which means it will fetch the latest notes data whenever a new note is added.
    useEffect(() => {
      fetchNotesAPI()
        .then((data) => {
          setNotes(data);
        })
        .catch((err) => alert(err.message));
        //fetching new notes by adding this array
    }, [notes])





      return (
        <div className="note-wrapper">
          {notes.map((note) => (
          <SingleNote key={note.id} note={note} showButton={true}/>
          ))}
          <AddNote  />
        </div>
      );
}