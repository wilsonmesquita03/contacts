import { Request, Response } from "express"
import editContactService from "../../services/Contact/editContact.service"

const editContactController = async (req: Request, res: Response) => {
    const { id } = req.params

    const response = await editContactService({id, ...req.body})

    return res.status(200).json(response)
}

export default editContactController