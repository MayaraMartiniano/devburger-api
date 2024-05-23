import * as Yup from 'yup'
import User from '../models/User'

class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        })
        
        const isValid = await schema.isValid(request.body) //validando email e senha de acordo com o schema

        const emailOrPasswordIncorrect = () => {
         response.status(401).json({error :'Make sure your email or password are correct'})
        }


        if (!isValid) {
          return emailOrPasswordIncorrect()
        }
                  
        const{email, password} = request.body

        const user = await User.findOne({  //verificando se o email existe na base
            where: {
                email,
            }
        })

        if(!user) {
            return emailOrPasswordIncorrect()
        }


        const isSamePassword = await user.checkPassword(password)

        if(!isSamePassword) { //verificando se a senha é a que está cadastrada no banco
            return emailOrPasswordIncorrect()
        }


        return response.json({ 
            id: user.id,
            name: user.name,
            email,
            admin: user.admin
        })

    }
}

export default new SessionController()