const express = require('express')
const app = express()
const apiRouter = require('./api')

app.use(express.static('ui'))

app.use('/api', apiRouter)

app.listen(80, function () {
  console.log('http serve: http://127.0.0.1:80')
})
