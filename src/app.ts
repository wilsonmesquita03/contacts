import "reflect-metadata"
import "express-async-errors"
import express from "express"
import HandleErrorMiddleware from "./middlewares/HandleError.middleware"
import clientRouter from "./routes/client.routes"
import contactRouter from "./routes/contact.routes"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())

app.use("/client", clientRouter)
app.use("/contact", contactRouter)

app.use(HandleErrorMiddleware)

export default app