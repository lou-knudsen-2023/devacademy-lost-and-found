import express from 'express'
const router = express.Router()

import * as db from '../db/found'

router.get('/', (req, res) => {
  db.getAllFound()
    .then((foundArr) => {
      res.json(foundArr)
    })
    .catch((err: Error) => console.log(err.message))
})

router.post('/', (req, res) => {
  const { name, species, photo, user_id, user_name, user_contact } = req.body
  const found = { name, species, photo, user_id, user_name, user_contact }
  db.createFound(found)
    .then((singlePetArr) => {
      res.json(singlePetArr[0])
      console.log(singlePetArr[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
