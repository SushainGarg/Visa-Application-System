import Visapplicant from "../models/visaApplicant.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res , next) => {
    const {full_name , Date_of_Birth , gender , nationality , email , phone , address , username , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const visaApplicant = new Visapplicant({
        full_name, 
        Date_of_Birth, 
        gender, 
        nationality, 
        contact_details: {email, phone},
        address, 
        authentication_details: {username, password: hashedPassword}
    });
    try {
        await visaApplicant.save();
        res.status(201).json({message: "User Created successful"});
    } catch (error) {
       next(error);
    }
   
};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const visaApplicant = await Visapplicant.findOne({"contact_details.email": email});
        if(!visaApplicant) next(errorHandler(404, visaApplicant+ " User not found"));
        const validPassword = bcryptjs.compareSync(password, visaApplicant.authentication_details.password);
        if(!validPassword) next(errorHandler(401, "Invalid credentials"));
        const token = jwt.sign({id: visaApplicant._id}, process.env.JWT_SECRET);
        const {authentication_details, contact_details, ...rest} = visaApplicant._doc;
        const expiry = new Date(Date.now() + 3600000); // 1 hour
        res
        .cookie("acces_token", token, {httpOnly: true} , {expires: expiry})
        .status(200)
        .json(rest);
    } catch (error) {
        next(error);
    }
}