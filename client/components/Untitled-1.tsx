import { AllNotes } from "./AllNotes"


function Home() {

  return (
    <>
    <h2>Welcome!</h2>
    <AllNotes />

    </>
  )
}

export default Home


////////////////////////////////



import { useEffect, useState} from 'react';
import * as Models from "../../models/NotesMods";
import { fetchNotesAPI } from '../apis/notesAPI';
import { SingleNote } from './SingleNote';
import { AddNote } from "./AddNote"



export function AllNotes(){
    const [notes, setNotes] = useState([] as Models.Note[]);


    //useEffect hook will run every time the notes state changes, which means it will fetch the latest notes data whenever a new note is added.
    useEffect(() => {
      fetchNotesAPI()
        .then((data) => {
          setNotes(data);
        })
        .catch((err) => alert(err.message));
        //fetch the notes data again whenever there is a change in the data
    }, [notes])





      return (
        <div className="note-wrapper">
          {notes.map((note) => (
          <SingleNote key={note.id} note={note} showButton={true}/>
          ))}
          <AddNote  />
        </div>
      );
}

///////////////////////////////////////////////////
import * as Models from "../../models/NotesMods";
import { useNavigate } from "react-router-dom";

interface Props {
    note: Models.Note;
    showButton?: boolean
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
      {showButton && <button onClick={handleClick}>Edit Note</button>}
    </div>
  );
}

/////////////////////////////////////////
import { useState, ChangeEvent, FormEvent, useEffect} from 'react';
import {makeNewAPI, fetchNotesAPI} from '../apis/notesAPI';
import { Note } from '../../models/NotesMods';

 
  export function AddNote() {


const [dataForm, setDataForm] = useState({} as Note)

  // this allows user to change current state of form fields
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

    //////submit the data
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    makeNewAPI(dataForm)

    .then(() => {
    //resetting the state of dataForm after the note is added
        setDataForm({} as Note);
      })
      .catch((err) => alert(err.message))
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input 
          type='text'
          name='title'
          value={dataForm.title}
          onChange={handleUpdate}
        />

        <label htmlFor="description">Description</label>
        <input 
          type='text'
          name='description'
            value={dataForm.description}
            onChange={handleUpdate}
        />

        <label htmlFor='category'>Category</label>
        <input 
          type='text'
          name='category'
          value={dataForm.category}
          onChange={handleUpdate}
        />

        <button type='submit'>Create</button>  
    </form>

    </>
  )
}
