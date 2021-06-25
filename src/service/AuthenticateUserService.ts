import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { User } from "../entities/User"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const USERSREPOSITORY = getCustomRepository(UsersRepositories)

        // verifica se o email já existe
        const USER = await USERSREPOSITORY.findOne({
            email
        })

        if (!USER) {
            throw new Error("Email/Password incorrect")
            // isso é pra impedir que uma pessoa com más intenções
            // fique com dúvidas se o email ou senha está correto
        }

        // verifica se a senha está correta (retorna um boolean)
        const PASSWORDMATCH = await compare(password, USER.password)

        if (!PASSWORDMATCH) {
            throw new Error("Email/Password incorrect")
        }

        //gerar token de autenticação
        const TOKEN = sign({
            email: USER.email
        }, "380b5dcf0d96dea07cd409d4761af387", {
            subject: USER.id,
            expiresIn: "1d"
        });

        return TOKEN;
    }
}

export { AuthenticateUserService }