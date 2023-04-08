import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteAPI, delNoteAPI } from '../apis/notesAPI';
import { Note } from '../../models/NotesMods';
import { SingleNote } from './SingleNote';
import { useNavigate } from 'react-router-dom';



export function EditNote() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | undefined>(undefined);
  const navigate = useNavigate();


  const handleDel = () => {
    if (note) {
      delNoteAPI(note.id)
      navigate('/')
    }
  }

  useEffect(() => {
    getNoteAPI(Number(id))
      .then((data) => {
        setNote(data);
      })
      .catch((err) => alert(err.message));
  }, [id]);

  return (
    <>
    <div>
      <h1>Note Details</h1>
      {note !== undefined && (
        <SingleNote note={note} />
      )}
    </div>

    <button className="del_button" onClick={handleDel}>Delete</button>
    </>
  );
}
