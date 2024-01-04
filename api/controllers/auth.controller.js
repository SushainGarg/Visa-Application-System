import Visapplicant from "../models/visaApplicant.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
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
        res.status(500).json(error.message)
    }
   
};