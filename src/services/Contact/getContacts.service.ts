import { Contact } from "../../entities/Contact"
import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { IContact, IContactCreate } from "../../interfaces/contact.interface"
import { ErrorHTTP } from "../../errors/ErrorHTTP"

const getContactsService = async (id: string): Promise<IContact[]> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contacts = await contactRepository.find({
        where: {
            client: {
                id: Number(id)
            }
        }
    })

    return contacts    
} 

export default getContactsService