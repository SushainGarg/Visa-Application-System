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
  profile_picture: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  },
}, {timestamps: true});


const VisaApplicant = mongoose.model("Visa-applicant", VisaApplicantSchema);

export default VisaApplicant;