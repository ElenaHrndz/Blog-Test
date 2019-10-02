const express = require('express')
const axios = require('axios')
const parser = require('body-parser')
const { post } = require('./endpoints')
const { authenticate } = require('./middlewares')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))

// parse application/json
app.use(parser.json())

const postsHandlers = users({ axios })

app.post('/', autenticate, postsHandlers.post)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
