import { Contact } from "../../entities/Contact"
import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { IContact, IContactCreate } from "../../interfaces/contact.interface"
import { ErrorHTTP } from "../../errors/ErrorHTTP"

const createContactService = async ({name, email, client_id, tel_number}: IContactCreate): Promise<IContact> => {
    const clientRepository = AppDataSource.getRepository(Client)
    const contactRepository = AppDataSource.getRepository(Contact)

    const client = await clientRepository.findOneBy({
        id: Number(client_id)
    })

    if(!client) throw new ErrorHTTP("Client not found", 404)
    
    const newContact = contactRepository.create({
        email: email,
        tel_number: tel_number,
        name: name,
        client: client
    })

    await contactRepository.save(newContact)

    return newContact
} 

export default createContactService