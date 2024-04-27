const express = require('express')
const morgan = require('morgan')

require('dotenv').config()
const app = express()
const userRouter = require ('./src/routes/users')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'))
app.use('/users', userRouter)
app.use('/', (req, res) => {
    return res.send('Hello')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})

module.exports = app;