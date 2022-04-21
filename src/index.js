import express from 'express'
import postsRoutes from './routes/posts.routes.js'
import { connectDB } from './db.js'

const app = express()
connectDB()
app.use(postsRoutes)

app.listen(4000)
console.log('Servidor corriendo en puerto 4000')