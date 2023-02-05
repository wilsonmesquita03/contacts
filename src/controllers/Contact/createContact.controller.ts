import { Request, Response } from "express"
import createContactService from "../../services/Contact/createContact.service"

const createContactController = async (req: Request, res: Response) => {
    const id = req.client.id

    const response = await createContactService({client_id: id, ...req.body})

    return res.status(201).json(response)
}

export default createContactController