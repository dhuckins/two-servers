const express = require('express')
const got = require('got')

const app = express()

async function makeRequest () {
  const response = await got('http://localhost:8080')
  return response.body
}

app.get('/', (req, res) => {
  makeRequest().then((content) => res.send(content))
})

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`express server listening on ${port}`)
})
