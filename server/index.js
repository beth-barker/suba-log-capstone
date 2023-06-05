require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const {SERVER_PORT, SECRET} = process.env

//DB imports
const {sequelize} = require('./util/database')
const {User} = require('./models/user')
const {Dive} = require('./models/dive')
const {Country} = require('./models/country')
const {seedDatabase} = require('./util/seed')

//DB relationhsips
User.hasMany(Dive)
Dive.belongsTo(User)

Country.hasMany(Dive)
Dive.belongsTo(Country)

//Controller imports
const {register, login, checkUser, logout} = require('./controllers/authCont')
const {addDive} = require('./controllers/divesCont')

const app = express()


//middleware
app.use(express.json())
app.use(cors())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 48
    }
}))

//endpoints Auth
app.post('/api/register', register)
app.post('/api/login', login)
app.get('/api/user', checkUser)
app.post('/api/logout', logout)

//Get endpoints

//Post endpoints
app.post('/dives', addDive)

sequelize.sync()
// .then(() => seedDatabase())
.then(() => {
    app.listen(SERVER_PORT, console.log(`Take us to port ${SERVER_PORT}`))
}).catch(err => console.log(err))
