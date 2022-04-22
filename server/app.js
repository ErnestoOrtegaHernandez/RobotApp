const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
let errorData = require('./errors.json')
let statusData = require('./status.json')
const cors = require('cors')


app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Ready for requests...</h1>')
})

app.get('/errors', (req, res) => {
  res.send(errorData);
})

app.get('/status', (req, res) => {
  res.send(statusData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})