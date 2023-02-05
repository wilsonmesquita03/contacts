import { Request, Response } from "express"
import createClientService from "../../services/Client/createClient.service"
import { instanceToPlain } from "class-transformer";

const createClientController = async (req: Request, res: Response) => {
    const response = await createClientService(req.body)

    return res.status(201).json(instanceToPlain(response))
}

export default createClientController