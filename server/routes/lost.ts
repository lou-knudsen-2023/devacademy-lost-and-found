import express from 'express'

import checkJwt, { JwtRequest } from '../auth0'

import * as db from '../db/lost'

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllLost()
    .then((lostArr) => {
      res.json(lostArr)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', checkJwt, (req: JwtRequest, res) => {
  const { name, species, photo, user_id, user_name, user_contact } = req.body
  const lost = { name, species, photo, user_id, user_name, user_contact }
  const auth0Id = req.auth?.sub
  if (!auth0Id) {
    return res.status(401).send('Unauthorized')
  }

  db.createLost(lost)
    .then((singlePetArr) => {
      res.json(singlePetArr[0])
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
