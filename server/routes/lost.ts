import express from 'express'
const router = express.Router()

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
  console.log(lost)
  db.createLost(lost)
  return res.json(lost)
})

router.get('/:id', (req, res) => {
  getOneLostAnimal(Number(req.params.id))
    .then((lostanimal) => res.json(lostanimal))
    .catch((err) => res.status(500).json({ status: 500, error: err.message }))
})

export default router
