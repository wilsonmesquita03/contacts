import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { IClient, IClientCreate } from "../../interfaces/client.interface"
import { hashSync } from "bcrypt"

const createClientService = async ({email, name, tel_number, password}: IClientCreate): Promise<IClient> => {
    const clientRepository = AppDataSource.getRepository(Client)
    
    const newClient = new Client()

    newClient.email = email
    newClient.name = name
    newClient.tel_number = tel_number
    newClient.password = hashSync(password, 10)
    
    clientRepository.create(newClient)

    await clientRepository.save(newClient)

    return newClient
} 

export default createClientService