import { useEffect, useState} from 'react';
import * as Models from "../../models/NotesMods";
import { fetchNotesAPI } from '../apis/notesAPI';
import { SingleNote } from './SingleNote';
import { AddNote } from "./AddNote"
import { useAuth0 } from "@auth0/auth0-react";

export function AllNotes(){
  const [notes, setNotes] = useState([] as Models.Note[]);
  const { user } = useAuth0();

  useEffect(() => {
    fetchNotesAPI()
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err.message));
  }, [])


  const refreshList = () => {
    fetchNotesAPI()
      .then((data) => {
        setNotes(data);
      })
      .catch((err) => alert(err.message));
  }

  //sub property typically contains a unique identifier for the authenticated user, from the auth object
  const userNotes = notes.filter((note) => note.added_by_user === user?.sub);

  return (
    <>
    <div className="notes-wrapper">
    {userNotes.map((note) => (
        //Pass the refreshList function as a prop to the SingleNote component
        <SingleNote key={note.id} note={note} showButton={true} refreshList={refreshList}/>
      ))}
    </div>
    <div>
           <AddNote refreshList={refreshList} />
    </div>
    </>
  )
}