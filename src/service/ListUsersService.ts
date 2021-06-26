import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

class ListUsersService {
    async execute() {
        const users_repositories = getCustomRepository(UsersRepositories);

        const users = await users_repositories.find();

        return users;
    }
}

export { ListUsersService }