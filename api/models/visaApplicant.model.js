import { time } from "console";
import mongoose from "mongoose";


const VisaApplicantSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  Date_of_Birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  contact_details: {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
    }
  },
  address: {
    type: String,
    required: true,
  },
  authentication_details: {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    }
  },
}, {timeStamps: true});


const VisaApplicant = mongoose.model("Visapplicant", VisaApplicantSchema);

export default VisaApplicant;