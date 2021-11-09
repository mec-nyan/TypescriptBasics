const express = require('express')
const path = require('path')
const app = express()
const port = 4040



app.get('/', (req, res) => {
  return res.send('Hello!')
})

app.listen(port, () => console.log(`App is listening on port ${port}`))
