import app from "../app";
import { Router } from "express";
import createClientController from "../controllers/Client/createClient.controller";
import DataSerializerMiddleware from "../middlewares/DataSerializer.middleware";
import createClientSchema from "../serializers/createClient.serializer";
import editClientController from "../controllers/Client/editClient.controller";
import getClientsController from "../controllers/Client/getClients.controller";
import editClientSchema from "../serializers/editClient.serializer";
import deleteClientController from "../controllers/Client/deleteClient.controller";
import createSessionController from "../controllers/Client/createSession.controller";
import createSessionSchema from "../serializers/createSession.serializer";

const clientRouter = Router()

clientRouter.post("/login", DataSerializerMiddleware(createSessionSchema), createSessionController)
clientRouter.get("/", getClientsController)
clientRouter.post("/", DataSerializerMiddleware(createClientSchema), createClientController)
clientRouter.patch("/:id", DataSerializerMiddleware(editClientSchema), editClientController)
clientRouter.delete("/:id", deleteClientController)

export default clientRouter