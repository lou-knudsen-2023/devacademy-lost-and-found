import express from 'express'
import path from 'path'
import { join } from 'node:path'

const server = express()

import notesRoute from './routes/notesRoute'

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))


server.use('/api/v1/notes', notesRoute)


export default server