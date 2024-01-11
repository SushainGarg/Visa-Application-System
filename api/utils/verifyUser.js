import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.acces_token;
    if (!token) return next(errorHandler(401, "You are not authenticated"));

    jwt.verify(token, process.env.JWT_SECRET , (err, visaApplicant) => {
        if (err) return next(errorHandler(403, "Invalid Token"));

        req.visaApplicant = visaApplicant;
        next();
    });
}