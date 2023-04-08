import { useEffect, useState} from 'react';
import * as Models from "../../models/NotesMods";
import { fetchNotesAPI } from '../apis/notesAPI';
import { SingleNote } from './SingleNote';
import { Link } from 'react-router-dom';

export function AllNotes(){
    const [notes, setNotes] = useState([] as Models.Note[]);

    useEffect(() => {
        fetchNotesAPI()
          .then((data) => {
            setNotes(data);
          })
          .catch((err) => alert(err.message));
      }, []);

      return (
        <div className="note-wrapper">
          {notes.map((note) => (
            <Link key={note.id} to={`/notes/${note.id}`}>
                <SingleNote/>
            </Link>
          ))}
        </div>
      );
}
