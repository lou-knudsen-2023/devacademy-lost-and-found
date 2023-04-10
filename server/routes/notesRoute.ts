import express from 'express'
import { NotesData, UserData} from '../../models/NotesMods';
import * as db from '../db/notesDB'
import { JwtRequest} from '../auth0'
import checkJwt from '../auth0'
const router = express.Router()


  //*******************Get all
router.get('/', (req, res) => {
    db.getAllNotesDB()
      .then((data) => {
        res.json(data)
      })
      .catch((err: Error) => {
        res.status(500).send(err.message)
      })
  })

  router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getNoteDB(id)
      .then((data) => {
        res.json(data)
      })
      .catch((err: Error) => {
        res.status(500).send(err.message)
      })
  })

  //*******************Make new
  // router.post('/', (req, res) => {
  //   db.createNewNoteDB(req.body)
  //     .then((data) => {
  //       res.json(data)
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err.message)
  //     })
  // })

  
  router.post('/', checkJwt, (req: JwtRequest, res) => {
    const { title,  description, category} = req.body
    const auth0Id = req.auth?.sub

    if (!auth0Id) {
      console.error('No auth0Id')
      return res.status(401).send('Unauthorized')
    }
  
    const newNote: UserData = {
      title,
      description,
      category,
      added_by_user: auth0Id  
    }
  
    db.createNewNoteDB(newNote)
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })
  
















  

  //*******************Edit existing

  router.patch('/:id', (req, res) => {
    const {title,description,category,group_id,added_by_user,} = req.body
    const data = {title,description,category,group_id,added_by_user}
    const id = Number(req.params.id)
  
    db.updateNoteDB(id, data)
      .then((post) => {
        res.json(post[0])
      })
      .catch((err: Error) => {
        res.status(500).send(err.message)
      })
  })

  //*******************Delete existing
  router.delete('/:id', (req,res) =>{
    db.delNoteDB (+req.params.id)
    .then(() => {
      res.sendStatus(200) 
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
  
  })


  export default router