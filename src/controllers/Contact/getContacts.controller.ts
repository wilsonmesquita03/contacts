import { Request, Response } from "express"
import getContactsService from "../../services/Contact/getContacts.service"

const getContactsController = async (req: Request, res: Response) => {
    const id = req.client.id

    const response = await getContactsService(id)

    return res.status(201).json(response)
}

export default getContactsController