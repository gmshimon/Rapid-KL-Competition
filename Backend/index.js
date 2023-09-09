const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.PORT || 8080
//middleware
app.use(express.json())
app.use(cors())

mongoose
  .connect(
    'mongodb+srv://Rapid-KL:WxNvVuP7xC167Gs3@cluster0.in8lp.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Database connected successfully')
  })

app.get('/', async (req, res, next) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log('Server running at ', port)
})
