import { useState, ChangeEvent, FormEvent} from 'react';
import {makeNewAPI} from '../apis/notesAPI';
import { NotesData } from '../../models/NotesMods';

 
export function AddNote() {


const [dataForm, setDataForm] = useState({} as NotesData)

  // this allows user to change current state of form fields
  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
    //to resetting the state of dataForm after the note is added
    // setDataForm({} as Note) - this didnt work, as telling the compiler to trust you that the empty object you're creating conforms to the Note type.
    //object literal notation, you are creating an object with properties that match the ones expected by the Note type
        setDataForm({
            title: '',
            description: '',
            category: '',
          })

      })
      .catch((err) => alert(err.message))
  }



  return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor='title'>Title</label>
        <textarea
          rows={5}
          name='title'
          value={dataForm.title}
          onChange={handleTextareaChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={5}
          name='description'
          value={dataForm.description}
          onChange={handleTextareaChange}
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
