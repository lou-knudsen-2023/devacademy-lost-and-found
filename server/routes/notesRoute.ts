import express from 'express'

import * as db from '../db/notesDB'

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

  //*******************Make new
  router.post('/', (req, res) => {
    db.createNewNoteDB(req.body)
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