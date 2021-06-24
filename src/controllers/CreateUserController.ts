import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const { name, email, admin } = request.body;

        const CREATEUSERSERVICE = new CreateUserService();

        const user = await CREATEUSERSERVICE.execute({ name, email, admin });

        return response.json(user);
    }
}

export { CreateUserController }