const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 2

app.listen(port,console.log(`server runing on port:${port}`))