import express from 'express'

const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})