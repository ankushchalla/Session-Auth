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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usersDB = [
    {id: 1, name: 'Ankush', email: 'ankush@gmail.com', password: 'secret'},
    {id: 2, name: 'Max', email: 'max@gmail.com', password: 'secret'},
]

const sessionDB = []

app.get('/home', (req, res) => {
    const { userId } = req.session;    

    let homePage = `
    <h1>${userId ? 'Welcome user: ' + userId : 'Please login or create an account.'}</h1>
    <a href = '/login'>Login<a/>
    <a href = '/register'>Register<a/>
    `
    res.send(homePage)
})

app.get('/login', (req, res) => {
    res.send(`
    <h1>Login</h1>
    <form method = 'POST' action = '/login'>
        <input type = 'email' name = 'email' placeholder = 'Email' required/>
        <input type = 'password' name = 'password' placeholder = 'Password' required/>
        <input type = 'submit' />
    </form>
    <a href = '/home'>Home</a>
    `)
})

app.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = usersDB.find(user => user.email === email && user.password === password)
    if (user) {
        req.session.userId = user.id
        return res.redirect('/home')
    } else {
        res.sendStatus(404)
    }
})

// app.get('/', (req, res) => {
//     // Server will serve build folder during production. 
//     // For local dev, we use a proxy instead. 
//     res.sendFile(path.join(__dirname, '/client/build/index.html'));
// })

app.listen(PORT, () =>
    console.log(`http://localhost:${PORT}`)
)