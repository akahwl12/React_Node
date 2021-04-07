const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://akahwl12:ghdnjs12@cluster0.if6cw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo DB Connect...'))
.catch(err => console.log('err..'))




app.get('/', (req, res) => {
  res.send('Hello 안녕!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})