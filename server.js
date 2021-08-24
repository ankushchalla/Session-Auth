const express = require('express')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const PORT = 4005

const app = express()

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/mongo_session_store',
    collection: 'user_sessions'
})

// Catch errors
store.on('error', function (error) {
    console.log(error);
});

app.use(session({
    cookie: {
        // By default, cookie expires when browser is closed. 
        sameSite: true,
    },
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat',
    // Session store defaults to in memory. Change to mongo later. 
    store: store
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usersDB = [
    { id: 1, name: 'Ankush', email: 'ankush@gmail.com', password: 'secret' },
    { id: 2, name: 'Max', email: 'max@gmail.com', password: 'secret' },
]

const sessionDB = []

app.get('/home', (req, res) => {
    const cookie = req.get('Cookie')
    console.log("session in get: " + cookie);
    res.json({
        message: "hello"
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = usersDB.find(user => user.email === email && user.password === password)
    if (user) {
        // You have to set something to the session for it to be created client side.
        req.session.userId = 5;
        console.log(`session: ${req.sessionID}`);
        res.json({ message: 'Login successful.' })
    } else {
        res.sendStatus(404)
    }
})

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
)