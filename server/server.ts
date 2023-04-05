import express from 'express'
import { join } from 'node:path'
// import lost from './routes/lost'

const server = express()

server.use(express.json())
server.use(express.static(join('server', 'public')))

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

// server.use('/api/v1/lost', lost)

export default server
