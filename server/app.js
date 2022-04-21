const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const errorData = require('./errors.json')
const cors = require('cors')


app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Ready for requests...</h1>')
})

app.get('/errors', (req, res) => {
  res.send(errorData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})