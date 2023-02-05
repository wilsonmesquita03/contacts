import { Request, Response, NextFunction } from "express"
import { ObjectSchema } from "yup"


const DataSerializerMiddleware = (serializer: ObjectSchema<any>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedBody = await serializer.validate(req.body, {
            stripUnknown: true
        })

        return next()

    } catch (error) {
        if(error instanceof Error) return res.status(400).json({message: error.message})
    }
}

export default DataSerializerMiddleware