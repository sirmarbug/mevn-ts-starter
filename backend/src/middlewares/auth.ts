import jwt, {Secret, JwtPayload} from 'jsonwebtoken'
import {Response, NextFunction, Request} from "express";
import {RequestWithUser, User} from "../types";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]

    if (!token) {
        return res.status(403).json({
            error: {
                message: 'A token is required for authentication'
            }
        })
    }

    try {
        const SECRET_KEY: Secret = process.env.TOKEN_KEY || 'secred_key';
        const decode: string | JwtPayload = jwt.verify(token, SECRET_KEY);
        (req as RequestWithUser).user = decode as User;
    } catch (e) {
        return res.status(401).json({
            error: {
                message: 'Invalid Token'
            }
        })
    }
    return next()
}

export default verifyToken
