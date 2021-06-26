import { Request, Response } from "express";
import { ListUsersService } from "../service/ListUsersService";


class ListUsersController {

    async handle(request: Request, response: Response) {
        const list_users_service = new ListUsersService();

        const users = list_users_service.execute();

        return response.json(users);
    }
}

export { ListUsersController }