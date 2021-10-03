const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./config/db')
dotenv.config({path : "./config/config.env"})

const task = require('./routes/task')
const user = require('./routes/user')
const comment = require('./routes/comment')
const tag = require('./routes/tag')

 db.authenticate().
 then(console.log('Connection has been established successfully.'))
 .catch (error => console.error('Unable to connect to the database:', error)) 

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(cors());

app.use('/api/v1/tasks',task)
app.use('/api/v1/users',user)
app.use('/api/v1/comments',comment)
app.use('/api/v1/tags',tag)

const port = process.env.PORT
const server = app.listen(port,console.log(`server is listening on ${port}`))