import { Request, Response, NextFunction } from "express";


export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const ADMIN = true;

    if (ADMIN) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })
}