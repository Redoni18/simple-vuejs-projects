const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req,res) => {
    res.send([{
        title: "Hello World!",
        description: "Hi there, how are you?"
    }])
})

app.listen(4000,()=>console.log('Server started at: 4000'))