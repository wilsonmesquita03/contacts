import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { IClient, IClientEdit } from "../../interfaces/client.interface"
import { ErrorHTTP } from "../../errors/ErrorHTTP"

const getClientsSerivce = async (): Promise<IClient[]> => {

    const repository = AppDataSource.getRepository(Client)

    const clients = await repository.find({
        relations: {
            contacts: true
        }
    })

    return clients

} 

export default getClientsSerivce