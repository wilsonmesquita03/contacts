import * as yup from "yup"
import { hash } from "bcrypt"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const createContactSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    tel_number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("tel_number is required"),
})

export default createContactSchema