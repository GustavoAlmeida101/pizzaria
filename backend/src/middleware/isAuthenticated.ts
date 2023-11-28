import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: String;
}


export function isAuthenticated(req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    console.log(authToken);

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token,
            process.env.JWT_Secret) as PayLoad;
         
            req.user_id
        console.log(sub);

        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
