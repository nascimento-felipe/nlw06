import { Request, Response } from "express";
import { ListTagsService } from "../service/ListTagsService";


class ListTagsController {
    async handle(request: Request, response: Response) {
        const list_tags = new ListTagsService();

        const tags = await list_tags.execute();

        return response.json(tags)
    }
}

export { ListTagsController }