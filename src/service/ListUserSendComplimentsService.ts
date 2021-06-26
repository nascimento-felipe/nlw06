import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const compliments_repositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await compliments_repositories.find({
            where: {
                user_sender: user_id
            }
        })

        return compliments;
    }
}

export { ListUserSendComplimentsService }