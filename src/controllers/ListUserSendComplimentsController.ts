import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";


class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listCompliments = new ListUserSendComplimentsService();

        const compliments = listCompliments.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController }