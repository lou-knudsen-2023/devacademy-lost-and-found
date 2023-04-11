import * as Models from "../../models/NotesMods";
import { useNavigate } from "react-router-dom";
import * as API from '../apis/notesAPI';

interface Props {
    note: Models.Note;
    showButton?: boolean
    //Receive the refreshList prop in the SingleNote component
    refreshList: () => void;
}

export function SingleNote({ note, showButton = false, refreshList }: Props) {

  const navigate = useNavigate();

  const handleClick = () => {
   navigate(`/notes/${note.id}`);
  };

  ////// DELETE THE NOTE
const handleDel = () => {
  if (note) {
    API.delNoteAPI(note.id)
    //Call the refreshList function after deleting the note in the handleDel function
    .then(() => {
      refreshList();
    })
    .catch((err) => alert(err.message));
    // navigate('/')
  }
}

  return (
    <div className="each-note-wrapper">
      { note.title && (<h3>{note.title}</h3>)}
      { note.description && (<p>Notes: {note.description}</p>)}
      { note.category && (<p>Category: {note.category}</p>)}
      { note.link && (<p>Link: <a href={note.link}>{note.link}</a></p>)}
      {note.image && (
      <div className="note-image-wrapper">
        <img src={`data:image/jpeg;base64,${note.image}`} alt={`${note.category} related prompt`} />
      </div>
      )}
      {showButton && <button onClick={handleClick}>Edit Note</button>}
      <button className="del_button" onClick={handleDel}>Delete</button>
    </div>
  );
}

