import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer";
import createSessionService from "../../services/Client/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
    const [token, client] = await createSessionService(req.body)

    return res.status(200).json({client: instanceToPlain(client), token: token})
}

export default createSessionController