const express = require('express')
const session = require('express-session')

const PORT = 3000

const app = express()

app.listen(PORT, () => 
    console.log(`http://localhost:${PORT}`)
)