const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = require('./routes')
const cors = require('cors')
const PORT = 3333


app.use(cors())
app.use(bodyParser.json())

app.use(router)
app.listen(PORT, _ => console.log(`server is active at ${PORT} port`))
