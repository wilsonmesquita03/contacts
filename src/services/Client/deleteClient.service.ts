import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { ErrorHTTP } from "../../errors/ErrorHTTP"

const deleteClientService = async (id: string): Promise<void> => {
    const clientRepository = AppDataSource.getRepository(Client)

    const findClient = await clientRepository.findOneBy({id: Number(id)})

    if (!findClient) throw new ErrorHTTP("Client not found", 404)

    await clientRepository.delete({id: Number(id)})
}

export default deleteClientService