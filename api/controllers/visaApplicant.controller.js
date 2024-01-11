import VisaApplicant from "../models/visaApplicant.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
    res.json({
        message: 'API is working!'
    });
};


// Update Visa Applicant
export const updateVisaApplicant = async (req, res , next) => {
    if (req.visaApplicant.id !== req.params.id) {
        return next(errorHandler(401, "You can update only your account!"))
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        console.log(req.body);
        const updatedVisaApplicant = await VisaApplicant.findByIdAndUpdate(req.params.id, 
            {$set:{
                email: req.body.email,
                phone: req.body.phone,
                full_name: req.body.full_name,
                Date_of_Birth: req.body.Date_of_Birth,
                gender: req.body.gender,
                address: req.body.address,
                username: req.body.username,
                password: req.body.password,
                nationality: req.body.address,
                profile_picture: req.body.profile_picture,
            } 
        }, 
        {new: true}
        );
        const {...rest } = updatedVisaApplicant._doc;
        res.status(200).json(rest);
        console.log(updatedVisaApplicant);
    } catch (error) {
        next(error);
    }
}
