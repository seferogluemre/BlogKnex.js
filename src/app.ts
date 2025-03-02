import express from 'express'
import categoryRoutes from './routes/category_routes'
const app = express()

require('dotenv').config()
app.use(express.json())


app.use('/categories', categoryRoutes)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})