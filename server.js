const express = require('express')
const session = require('express-session')

const PORT = 4005

const app = express()

app.use(session({
    cookie: {
        // By default, cookie expires when browser is closed. 
        sameSite: true,
    },
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat'
    // Session store defaults to in memory. Change to mongo later. 

}))

app.get('/', (req, res) => {
    console.log(`Session: ${req.session}`);
})

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
)