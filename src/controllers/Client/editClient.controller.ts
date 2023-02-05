import { Request, Response } from "express"
import editClientService from "../../services/Client/editClient.service"
import { instanceToPlain } from "class-transformer";

const editClientController = async (req: Request, res: Response) => {
    const { id } = req.params

    const response = await editClientService({id, ...req.body})

    return res.status(201).json(instanceToPlain(response))
}

export default editClientController