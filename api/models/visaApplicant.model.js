import { time } from "console";
import mongoose from "mongoose";

var mongoose = require('mongoose');

const VisaApplicantSchema = mongoose.Schema({
  applicant_id: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: true
  },
  full_name: {
    type: String
  },
  Date_of_Birth: {
    type: Date
  },
  gender: {
    type: String
  },
  nationality: {
    type: String
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
    type: String
  },
  authectication_details: {
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
  system_preferences: {
    type: Schema.Types.ObjectId,
    required: true
  }
}, {timeStamps: true});


const VisaApplicant = mongoose.model("VisaApplicant", VisaApplicantSchema);

export default VisaApplicant;