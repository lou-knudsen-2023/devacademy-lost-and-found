import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteAPI, delNoteAPI, updateNoteAPI } from '../apis/notesAPI';
import { Note } from '../../models/NotesMods';
import { useNavigate } from 'react-router-dom';



export function EditNote() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | undefined>(undefined);
  const navigate = useNavigate();



  ///GET THE NOTE
  useEffect(() => {
    getNoteAPI(Number(id))
      .then((data) => {
        setNote(data);
      })
      .catch((err) => alert(err.message));
  }, [id])




  ////UPDATE Note//////
  //this pulls in the data to use in the form
  //is there a better way to get this state?
  const [dataForm, setDataForm] = useState<{
    title:string
    description: string
    category:string
 
  }>({
    title: '',
    description: '',
    category: '',
 
  })

  //this fills out the form fields with the current data (and changes being made)
  useEffect(() => {
    if (note) {
      setDataForm({
        title: note.title,
        description: note.description,
        category: note.category,
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
  // const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setDataForm({
  //     ...dataForm,
  //     [e.target.name]: e.target.value,
  //   })
  // }

    //////submit the data
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    updateNoteAPI(Number(id), dataForm)
    // console.log(dataForm)
    navigate('/')
  }


////// DELETE THE NOTE
const handleDel = () => {
  if (note) {
    delNoteAPI(note.id)
    navigate('/')
  }
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

        <button type='submit'>Update</button>  
    </form>

    <button className="del_button" onClick={handleDel}>Delete</button>
    </>
  );
}
