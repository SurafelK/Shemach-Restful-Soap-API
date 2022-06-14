const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('../middleware/errrorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/product', require('./routes/productRoutes'))
app.use('/shemach', require('./routes/shemachRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))