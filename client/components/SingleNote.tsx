import { useEffect, useState } from 'react';
import * as Models from "../../models/NotesMods";
import { fetchNotesAPI } from '../apis/notesAPI';

type Props = {
  id: number;
};

export function SingleNote({ id }: Props) {
  const [note, setNote] = useState<Models.NotesData | null>(null);

  useEffect(() => {
    fetchNotesAPI(id)
      .then((data) => {
        setNote(data);
      })
      .catch((err) => alert(err.message));
  }, [id]);

  if (!note) {
    return <div>Loading note data...</div>;
  }

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p>Category: {note.category}</p>
      <p>Group ID: {note.group_id}</p>
      <p>Added by: {note.added_by_user}</p>
    </div>
  );
}
