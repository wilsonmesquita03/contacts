import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { IClient, IClientEdit } from "../../interfaces/client.interface"
import { ErrorHTTP } from "../../errors/ErrorHTTP"
import { hashSync } from "bcrypt"

const editClientService = async ({id, email, name, tel_number, password}: IClientEdit): Promise<IClient> => {
    const clientRepository = AppDataSource.getRepository(Client)
    
    const findClient = await clientRepository.findOneBy({
        id: Number(id)
    })

    if (!findClient){
        throw new ErrorHTTP("Client not found", 404)
    }

    await clientRepository.update(id, {
        email: email ? email : findClient.email,
        name: name ? name : findClient.name,
        tel_number: tel_number ? tel_number : findClient.tel_number,
        password: password ? hashSync(password, 10) : findClient.password
    })
    
    const client = await clientRepository.findOneBy({id: Number(id)})

    return client!
} 

export default editClientService