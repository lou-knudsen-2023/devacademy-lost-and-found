import express from 'express'

import { JwtRequest } from '../auth0'
import checkJwt from '../auth0'

import * as db from '../db/found'

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllFound()
    .then((foundArr) => {
      res.json(foundArr)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', checkJwt, (req: JwtRequest, res) => {
  const { name, species, photo, user_id, user_name, user_contact } = req.body
  const found = { name, species, photo, user_id, user_name, user_contact }
  const auth0Id = req.auth?.sub
  if (!auth0Id) {
    return res.status(401).send('Unauthorized')
  }

  db.createFound(found)
    .then((singlePetArr) => {
      res.json(singlePetArr[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
