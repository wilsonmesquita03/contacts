import AppDataSource from "../../data-source"
import { IContact, IContactEdit } from "../../interfaces/contact.interface"
import { ErrorHTTP } from "../../errors/ErrorHTTP"
import { Contact } from "../../entities/Contact"

const editContactService = async ({id, email, name, tel_number}: IContactEdit): Promise<IContact> => {
    const contactRepository = AppDataSource.getRepository(Contact)
    
    const findContact = await contactRepository.findOneBy({
        id: Number(id)
    })

    if (!findContact) throw new ErrorHTTP("Contact not found", 404)

    await contactRepository.update(id, {
        name: name ? name : findContact.name,
        email: email ? email : findContact.email,
        tel_number: tel_number ? tel_number : findContact.tel_number
    })
    
    const contact = await contactRepository.findOneBy({id: Number(id)})

    return contact!
} 

export default editContactService