import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface iComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_sender, user_receiver, message }: iComplimentRequest) {
        const COMPLIMENTS_REPOSITORIES = getCustomRepository(ComplimentsRepositories)
        const USERS_REPOSITORIES = getCustomRepository(UsersRepositories)

        if (user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver")
        }

        const USER_RECEIVER_EXISTS = await USERS_REPOSITORIES.findOne(user_receiver)

        if (!USER_RECEIVER_EXISTS) {
            throw new Error("User receiver does not exist")
        }

        const COMPLIMENT = COMPLIMENTS_REPOSITORIES.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await COMPLIMENTS_REPOSITORIES.save(COMPLIMENT)

        return COMPLIMENT;

    }
}

export { CreateComplimentService }