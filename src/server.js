const express = require('express')
const parser = require('body-parser')
const { posts } = require('./endpoints')
const { authenticate } = require('./middlewares')
const services = require('./services')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }))

// parse application/json
app.use(parser.json())

const postsHandlers = posts(services)

app.post('/', authenticate, postsHandlers.post)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
