import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";


class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listCompliments = new ListUserReceiveComplimentsService();

        const compliments = listCompliments.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController }