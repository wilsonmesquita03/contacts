import AppDataSource from "../../data-source";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { ErrorHTTP } from "../../errors/ErrorHTTP";
import { Client } from "../../entities/Client";
import { IClientLogin } from "../../interfaces/client.interface";

const createSessionService = async ({email, password}: IClientLogin): Promise<[string, Client]> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const client = await clientRepository.findOne({
        where: {
            email: email
        },
        relations: {
            contacts: true
        }
    })

    if(!client) throw new ErrorHTTP("Invalid email or password", 403)

    const passwordMatch = await compare(password, client.password)

    if(!passwordMatch) throw new ErrorHTTP("Invalid email or password", 403)

    const token = jwt.sign({
            id: client.id
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: "24h",
            subject: String(client.id)
        }
    )

    return [token, client]
}

export default createSessionService