import { Contact } from "../../entities/Contact"
import { Client } from "../../entities/Client"
import AppDataSource from "../../data-source"
import { IContact, IContactCreate } from "../../interfaces/contact.interface"
import { ErrorHTTP } from "../../errors/ErrorHTTP"

const deleteContactService = async (id: string): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({
        id: Number(id)
    })

    if(!contact) throw new ErrorHTTP("Contact not found", 404)

    await contactRepository.delete(contact)
    
}

export default deleteContactService