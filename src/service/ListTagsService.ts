import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagsService {
    async execute() {
        const tags_repositories = getCustomRepository(TagsRepositories);

        const tags = await tags_repositories.find();

        return tags;
    }
}

export { ListTagsService }