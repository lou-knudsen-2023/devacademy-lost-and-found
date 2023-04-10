import { useState, ChangeEvent, FormEvent} from 'react';
import {makeNewAPI} from '../apis/notesAPI';
import { NotesData } from '../../models/NotesMods';
import { useAuth0 } from "@auth0/auth0-react";
 
export function AddNote({ refreshList }: { refreshList: () => void }) {
    //user can see
    const { getAccessTokenSilently, isAuthenticated} = useAuth0();
 

const [dataForm, setDataForm] = useState({
  title: '',
  description: '',
  category: '',
} as NotesData)

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      // This function retrieves a new access token for the authenticated user from the Auth0 server.  token is then passed as an argument to the makeNewAPI function. In summary, the token is used to authenticate and authorize the user when making an HTTP request to create a new note.
      const token = await getAccessTokenSilently()
      await makeNewAPI(dataForm, token)
      
      setDataForm({
        title: '',
        description: '',
        category: ''
      })

      refreshList()

    } catch (error) {
      console.error(error)
    }

  }

  // Render the form only if the user is authenticated
  return isAuthenticated ? (
    <>
     <h2 className='title -is-2'>Add a new note.</h2>
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
  ): (
    <h2 className='title -is-2'>Please log in to add a new note.</h2>
  )
}
