import * as yup from "yup"
import { hashSync } from "bcrypt"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const editClientSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    tel_number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: yup.string()
})

export default editClientSchema