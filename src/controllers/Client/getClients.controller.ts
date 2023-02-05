import { Request, Response } from "express"
import getClientsSerivce from "../../services/Client/getClients.service"
import { instanceToPlain } from "class-transformer";

const getClientsController = async (req: Request, res: Response) => {
    const response = await getClientsSerivce()

    return res.status(200).json(instanceToPlain(response))
}

export default getClientsController