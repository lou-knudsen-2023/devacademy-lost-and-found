import { useState, ChangeEvent, FormEvent } from 'react' 
import { makeNewAPI } from '../apis/notesAPI' 
import { NotesData } from '../../models/NotesMods' 
import { useAuth0 } from '@auth0/auth0-react' 
import * as Base64 from 'base64-arraybuffer' 

export function AddNote({ refreshList }: { refreshList: () => void }) {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()

  const [dataForm, setDataForm] = useState({
    title: '',
    description: '',
    category: '',
    link: '',
    image: '',
  } as NotesData) 

  const handleUpdate = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    }) 
  } 

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]


      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
          setDataForm({
          ...dataForm,
          image: Base64.encode(reader.result as ArrayBuffer)
        })
      }
    }
  } 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault() 
    try {
      const token = await getAccessTokenSilently() 
      await makeNewAPI(dataForm, token) 

      setDataForm({
        title: '',
        description: '',
        category: '',
        link: '',
        image: '',
      })

    // reset file input field value
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement 
    fileInput.value = ''

    refreshList() 

    } catch (error) {
      console.error(error) 
    }
  } 




  return isAuthenticated ? (
    <>
      <h2 className="title -is-2">Add a new note.</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <textarea
          rows={5}
          name="title"
          value={dataForm.title}
          onChange={handleUpdate}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={5}
          name="description"
          value={dataForm.description}
          onChange={handleUpdate}
        />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" onChange={handleImageChange} />

        <label htmlFor="link">Link</label>
        <input
          type="text"
          name="link"
          value={dataForm.link}
          onChange={handleUpdate}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={dataForm.category}
          onChange={handleUpdate}
        />

        <button type="submit">Create</button>
      </form>
    </>
  ) : (
    <h2 className="title -is-2">Please log in to add a new note.</h2>
  ) 
}
