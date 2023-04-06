import express from 'express'
import { join } from 'node:path'
import lost from './routes/lost'

const server = express()

server.use(express.json())
server.use(express.static(join('server', 'public')))
server.use('/api/v1/lost', lost)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
