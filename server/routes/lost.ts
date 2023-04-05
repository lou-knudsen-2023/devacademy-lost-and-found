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
  const lost = req.body
  db.makeFound(id)
})
