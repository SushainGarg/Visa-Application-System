import { time } from "console";
import mongoose from "mongoose";


const VisaApplicantSchema = mongoose.Schema({
  full_name: {
    type: String,
  },
  Date_of_Birth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  nationality: {
    type: String,
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
      sparse: true,
    }
  },
  address: {
    type: String,
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
}, {timestamps: true});


const VisaApplicant = mongoose.model("Visa-applicant", VisaApplicantSchema);

export default VisaApplicant;