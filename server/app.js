const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

let errorData = require('./errors.json')
let statusData = require('./status.json')
const cors = require('cors')

app.use(express.json());
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

app.get('/tasks', (req, res) => {
  let tasks = ['Assemble', 'Cut', 'Measure', 'Move', 'Unload', 'Cancel'];
  res.send(JSON.stringify(tasks));
})
app.post('/status', (req, res) => {
  let newStatus = req.body;

  for(let i = 0; i < statusData.length; i++) {
    if(statusData[i].robotId === newStatus.robot) {
      if(newStatus.task === 'Cancel') {
        statusData[i].status = newStatus.task;
        statusData[i].completion = null;
      } else {
        statusData[i].status = newStatus.task;
        statusData[i].completion = '0%';
      }
      break;
    }
  }
  //write json file as status.json
  fs.writeFile('./status.json', JSON.stringify(statusData), (err) => {

    if(err) res.sendStatus(501);
    res.sendStatus(200);
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})