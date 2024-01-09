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
        if(!visaApplicant) return next(errorHandler(404, email+ " not found"));
        const validPassword = bcryptjs.compareSync(password, visaApplicant.authentication_details.password);
        if(!validPassword) return next(errorHandler(401, "Invalid credentials"));
        const token = jwt.sign({id: visaApplicant._id}, process.env.JWT_SECRET);
        const {authentication_details, contact_details, ...rest} = visaApplicant._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour
        res
        .cookie("acces_token", token, {httpOnly: true, expires: expiryDate})
        .status(200)
        .json(rest);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const google = async (req, res, next) => {
    try {
        const visaApplicant = await Visapplicant.findOne({"contact_details.email": req.body.email}); // find the user with the email
        if(visaApplicant) {
            const token = jwt.sign({id: visaApplicant._id}, process.env.JWT_SECRET); // JWT_SECRET is the secret key
            const {authentication_details, contact_details, ...rest} = visaApplicant._doc; // _doc is the document itself
            const expiryDate = new Date(Date.now() + 3600000); // 1 hour
            res.cookie("acces_token", token, {httpOnly: true, expires: expiryDate}).status(200).json(rest); // send the user data to the client
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8)
             + Math.random().toString(36).slice(-8); // generate a random password
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10); // hash the password 

            const username = req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8); // username is the name without spaces and a random number
            const visaApplicant = new Visapplicant({
                full_name: req.body.full_name,
                contact_details: {email : req.body.email},
                authentication_details: {username: username, password: hashedPassword},
                profile_picture: req.body.photoUrl
            }); // create a new user
            await visaApplicant.save(); // save the user
            const token = jwt.sign({id: visaApplicant._id}, process.env.JWT_SECRET); // JWT_SECRET is the secret key
            const {authentication_details, contact_details, ...rest} = visaApplicant._doc; // _doc is the document itself
            const expiryDate = new Date(Date.now() + 3600000); // 1 hour
            res.cookie("acces_token", token, {
                httpOnly: true, 
                expires: expiryDate,
            }).status(200).json(rest); // send the user data to the client
        }
    } catch (error) {
        console.log('Google unable to Authenticate' , error); // log the error
    }
}
