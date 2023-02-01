import express from "express"
import HandleErrorMiddleware from "./middlewares/HandleError.middleware"

const app = express()

app.use(express.json())

app.use(HandleErrorMiddleware)