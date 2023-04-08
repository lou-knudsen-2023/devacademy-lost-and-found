import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteAPI } from '../apis/notesAPI';
import { Note } from '../../models/NotesMods';
import { SingleNote } from './SingleNote';

export function EditNote() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | undefined>(undefined);

  useEffect(() => {
    getNoteAPI(Number(id))
      .then((data) => {
        console.log(data)
        setNote(data);
      })
      .catch((err) => alert(err.message));
  }, [id]);

  return (
    <div>
      <h1>Note Details</h1>
      {note !== undefined && (
        <SingleNote note={note} />
      )}
    </div>
  );
}
