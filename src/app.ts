import express from 'express'

import categoryRoutes from './routes/category_routes'
import postRoutes from './routes/post_routes'
import commentRoutes from './routes/comment_routes'

const app = express()

require('dotenv').config()
app.use(express.json())


app.use('/categories', categoryRoutes)
app.use('/posts', postRoutes)
app.use('/comments', commentRoutes)


app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})