import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../apis/notesAPI';
import * as Models from "../../models/NotesMods";
import { useNavigate } from 'react-router-dom';
import * as Base64 from 'base64-arraybuffer' 


export function EditNote() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Models.Note | undefined>(undefined);
  const navigate = useNavigate();



  ///GET THE NOTE
  useEffect(() => {
   API.getNoteAPI(Number(id))
      .then((data) => {
        setNote(data);
      })
      .catch((err) => alert(err.message));
  }, [id])




  ////UPDATE Note//////
  //this pulls in the data to use in the form
  const [dataForm, setDataForm] = useState<Models.NotesData>({
    title: '',
    description: '',
    category: '',
    link:'',
    image:undefined
  });

  //this fills out the form fields with the current data (and changes being made)
  useEffect(() => {
    if (note) {
      setDataForm({
        title: note.title,
        description: note.description,
        category: note.category,
        link:note.link,
        image:note.image 
      })
    }
  }, [note])

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
        // clear the input value after setting the Base64-encoded image
        e.target.value = ''
      }
    }
  }

    //////submit the data
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    API.updateNoteAPI(Number(id), dataForm)
    navigate('/')
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
              <label htmlFor='image'>Image</label>
        <input 
          type='file'
          name='image'
          value={dataForm.image}
          onChange={handleImageChange}
        />

      <label htmlFor='link'>Link</label>
        <input 
          type='text'
          name='link'
          value={dataForm.link}
          onChange={handleUpdate}
        />

        <label htmlFor='category'>Category</label>
        <input 
          type='text'
          name='category'
          value={dataForm.category}
          onChange={handleUpdate}
        />

        <button type='submit'>Update</button>  
    </form>


    </>
  );
}
