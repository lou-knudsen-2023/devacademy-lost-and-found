import * as Models from "../../models/NotesMods";
import { useNavigate } from "react-router-dom";
import * as API from '../apis/notesAPI';

interface Props {
    note: Models.Note;
    showButton?: boolean
}

export function SingleNote({ note, showButton = false }: Props) {

  const navigate = useNavigate();

  const handleClick = () => {
   navigate(`/notes/${note.id}`);
  };

  ////// DELETE THE NOTE
const handleDel = () => {
  if (note) {
    API.delNoteAPI(note.id)
    navigate('/')
  }
}

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <p>Category: {note.category}</p>
      {showButton && <button onClick={handleClick}>Edit Note</button>}
      <button className="del_button" onClick={handleDel}>Delete</button>
    </div>
  );
}

