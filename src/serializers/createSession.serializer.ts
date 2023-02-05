import * as yup from "yup"


const createSessionSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required()
})

export default createSessionSchema