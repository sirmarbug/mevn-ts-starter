import jwt, {Secret, JwtPayload} from 'jsonwebtoken'
import {Response, NextFunction, Request} from "express";
import {RequestWithUser, SocketWithUser, TokenData } from "../types";
import {Socket} from "socket.io";

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
        (req as RequestWithUser).user = decode as TokenData;
    } catch (e) {
        return res.status(401).json({
            error: {
                message: 'Invalid Token'
            }
        })
    }
    return next()
}

export const verifyTokenOnWebSocket = (socket: Socket, next: any) => {
    const token = socket.handshake.headers.authorization || socket.handshake.auth.token

    if (!token || !token.length) {
        next(new Error('Not found token'))
        return
    }

    try {
        const SECRET_KEY: Secret = process.env.TOKEN_KEY || 'secred_key';
        const decode: string | JwtPayload = jwt.verify(token, SECRET_KEY);
        (socket as SocketWithUser).user = decode as TokenData;
        next()
    } catch (e) {
        console.log(e)
        next(new Error('Invalid token'))
    }
}

export default verifyToken
