import { Router } from "express";
import createContactController from "../controllers/Contact/createContact.controller";
import deleteContactController from "../controllers/Contact/deleteContact.controller";
import editContactController from "../controllers/Contact/editContact.controller";
import getContactsController from "../controllers/Contact/getContacts.controller";
import DataSerializerMiddleware from "../middlewares/DataSerializer.middleware";
import isAuthenticatedMiddleware from "../middlewares/isAuthenticated.middleware";
import createContactSchema from "../serializers/createContact.serializer";
import editContactSchema from "../serializers/editContact.serializer";

const contactRouter = Router()

contactRouter.get("/", isAuthenticatedMiddleware, getContactsController)
contactRouter.post("/", isAuthenticatedMiddleware, DataSerializerMiddleware(createContactSchema), createContactController)
contactRouter.patch("/:id", isAuthenticatedMiddleware, DataSerializerMiddleware(editContactSchema), editContactController)
contactRouter.delete("/:id", isAuthenticatedMiddleware, deleteContactController)

export default contactRouter