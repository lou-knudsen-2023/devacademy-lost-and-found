import express from 'express'
const router = express.Router()
import { LostAnimal } from '../../common/LostAnimal'
import { getOneLostAnimal } from '../db/lost'

import * as db from '../db/lost'

router.get('/', (req, res) => {
  db.getAllLost()
    .then((lostArr) => {
      res.json(lostArr)
    })
    .catch((err: Error) => console.log(err.message))
})

router.post('/', (req, res) => {
  const { name, species, photo, user_id, user_name, user_contact } = req.body
  const lost = { name, species, photo, user_id, user_name, user_contact }
  db.createLost(lost)
    .then((singlePetArr) => {
      res.json(singlePetArr[0])
      console.log(singlePetArr[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  getOneLostAnimal(Number(req.params.id))
    .then((lostanimal) => res.json(lostanimal))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
