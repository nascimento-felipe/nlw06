import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
    async execute(name: string) {
        const TAGSREPOSITORIES = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name")
        }

        const TAGALREADYEXISTS = await TAGSREPOSITORIES.findOne({
            name
        })

        if (TAGALREADYEXISTS) {
            throw new Error("Tag already exists");
        }

        const tag = TAGSREPOSITORIES.create({
            name
        })

        await TAGSREPOSITORIES.save(tag);

        return tag;
    }
}

export { CreateTagService }