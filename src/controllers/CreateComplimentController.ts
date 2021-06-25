import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { CreateComplimentService } from "../service/CreateComplimentService";


class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { tag_id, user_sender, user_receiver, message } = request.body;

        const CREATE_COMPLIMENT_SERVICE = new CreateComplimentService();

        const COMPLIMENT = await CREATE_COMPLIMENT_SERVICE.execute({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        return response.json(COMPLIMENT);
    }
}

export { CreateComplimentController }