import express from 'express'
import proyectosRoutes from './routes/proyectosRoutes.js'

const app = express()

app.use(express.json()) // interpreta el body cuando viene un json

app.use(proyectosRoutes)

app.listen(2222, () => {
  console.log(`estas conectado al puerto 2222`)
})