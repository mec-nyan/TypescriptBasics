const express = require('express')
const path = require('path')
const app = express()
const port = 4040


app.use(express.static('.'))

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => console.log(`App is listening on port ${port}`))
