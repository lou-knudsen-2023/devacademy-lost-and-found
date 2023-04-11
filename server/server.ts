import express from 'express'
import path from 'path'
import { join } from 'node:path'
import fileUpload from 'express-fileupload'

const server = express()

import notesRoute from './routes/notesRoute'

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(fileUpload())
server.use(express.json({ limit: '50mb' }))


server.use('/api/v1/notes', notesRoute)

//this makes the page refresh work!
server.get('*', (req, res) => {
    res.sendFile(join(__dirname, './public/index.html'))
  })

export default server