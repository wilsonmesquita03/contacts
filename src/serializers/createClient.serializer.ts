import { hash, hashSync } from "bcrypt"
import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const createClientSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    tel_number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("tel_number is required"),
    password: yup.string().required("password is required")
})

export default createClientSchema