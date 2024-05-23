import { v4 } from "uuid"
import * as Yup from "yup"

import User from '../models/User'


class UserController {
    async store(request, response) {    //validando os dados de criação de usuario
 const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    admin: Yup.boolean()
 })


 try {
    schema.validateSync(request.body, {abortEarly: false})
} catch(err) {
    return response.status(400).json({error: err.errors})
}

        const {name, email, password, admin} = request.body

const userExists = await User.findOne({    //validando se o email existe
    where: {
        email,
    }
})

if (userExists) {
    return response.status(400).json({ error: 'User already exist'})
}


        const user = await User.create ({
            id: v4(),
            name,
            email,
            password,
            admin,
           })
           
            return response.status(201).json({
                id: user.id,
                name,
                email,
                admin,
                }) //só vai mandar no front end essas informações
    }
}

export default new UserController()