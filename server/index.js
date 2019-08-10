const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/post')
app.use('/api/post',posts)
const port = process.env.port || 5000;

app.listen(port,() => console.log('server started on port ',port))