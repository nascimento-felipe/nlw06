import { Request, Response, NextFunction } from 'express'
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const AUTHTOKEN = request.headers.authorization;

    // verifica se está preenchido
    if (!AUTHTOKEN) {
        return response.status(401).end();
    }

    const [, token] = AUTHTOKEN.split(" ");

    try {
        // validação do token
        const { sub } = verify(token, "380b5dcf0d96dea07cd409d4761af387") as IPayload;

        request.user_id = sub;

        return next();

    } catch (err) {
        return response.status(401).end();
    }


}