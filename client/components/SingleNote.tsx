import * as Models from "../../models/NotesMods";
import { useNavigate } from "react-router-dom";

interface Props {
    note: Models.Note;
    showButton?: boolean; // add a showButton prop
}

export function SingleNote({ note, showButton = false }: Props) {

  const navigate = useNavigate();

  const handleClick = () => {
   navigate(`/notes/${note.id}`);
  };

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p>Category: {note.category}</p>
      <p>Group ID: {note.group_id}</p>
      <p>Added by: {note.added_by_user}</p>
      {showButton && <button onClick={handleClick}>Go to Note</button>}
    </div>
  );
}

