import { useState, ChangeEvent, FormEvent } from 'react';
import {makeNewAPI} from '../apis/notesAPI';
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
    evt.preventDefault()
    makeNewAPI(dataForm)
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
