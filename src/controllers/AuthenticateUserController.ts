import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/AuthenticateUserService";


class AuthenticateUserController {

    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const AUTHENTICATEUSERSERVICE = new AuthenticateUserService();

        const TOKEN = await AUTHENTICATEUSERSERVICE.execute({ email, password });

        return response.json(TOKEN)
    }
}

export { AuthenticateUserController }