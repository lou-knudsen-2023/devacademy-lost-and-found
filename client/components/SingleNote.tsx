
import * as Models from "../../models/NotesMods";

interface Props {
    note: Models.Note;
}

export function SingleNote({ note }: Props) {
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