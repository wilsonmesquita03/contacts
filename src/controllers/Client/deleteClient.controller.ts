import { Request, Response } from "express"
import deleteClientService from "../../services/Client/deleteClient.service"

const deleteClientController = async (req: Request, res: Response) => {
    const { id } = req.params

    const response = await deleteClientService(id)

    return res.status(204).json(response)
}

export default deleteClientController