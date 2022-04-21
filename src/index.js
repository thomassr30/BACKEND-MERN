import express from 'express'
import postsRoutes from './routes/posts.routes.js'
const app = express()

app.use(postsRoutes)

app.listen(4000)
console.log('Servidor corriendo en puerto 4000')