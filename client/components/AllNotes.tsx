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

//new function, copy past 15-18

    return (
      <div className="note-wrapper">
        {notes.map((note) => (
        <SingleNote key={note.id} note={note} showButton={true}/>
        ))}
        <AddNote  />
      </div>
    )
}