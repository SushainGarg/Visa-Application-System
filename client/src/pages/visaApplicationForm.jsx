import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';

const VisaApplicationForm = () => {
  const signaturePadRef = useRef(null);
  const [signatureData, setSignatureData] = useState(null);
  const [formData, setFormData] = useState({
    // Initialize fields with empty values
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  const handleFileUpload = (event) => {
    event.preventDefault();
    console.log(event.target.files);
    // Handle file upload logic here
  };

    return (
      <div className="bg-white shadow sm:rounded-lg m-5">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-bold mb-4">Visa Application Form</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Personal Information */}
      <div className="col-span-2">
        <h3 className="text-xl font-medium mb-4">Personal Information</h3>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"

            
name="firstName"

            
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            
value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="middleName" className="block text-gray-700 font-bold mb-2">
            Middle Name (Optional)
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            
value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
            Last Name
          </label>

          
<input

            
type="text"

            
id="lastName"

            
name="lastName"

            
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            
value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            
value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"

            
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            
value={formData.gender}

            
onChange={handleChange}
          >

            
<option
 
value="">Select Gender</option>

            
<option
 
value="male">Male</option>

            
<option
 
value="female">Female</option>

            
<option
 
value="other">Other</option>

          
</select>

        
</div>
      </div>
      
      {/* Travel Information */}
<div className="col-span-2">
  <h3 className="text-xl font-medium mb-4">Travel Information</h3>
  <div className="mb-4">
    <label htmlFor="travelDates" className="block text-gray-700 font-bold mb-2">
      Travel Dates
    </label>
    <input
      type="date"
      id="travelDates"
      name="travelDates"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.travelDates}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="purposeOfVisit" className="block text-gray-700 font-bold mb-2">
      Purpose of Visit
    </label>
    <select
      id="purposeOfVisit"
      name="purposeOfVisit"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.purposeOfVisit}
      onChange={handleChange}
    >
      <option value="">Select Purpose</option>
      <option value="tourism">Tourism</option>
      <option value="business">Business</option>
      <option value="study">Study</option>
      <option value="familyVisit">Family Visit</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="destinationCountry" className="block text-gray-700 font-bold mb-2">
      Destination Country
    </label>
    <input
      type="text"
      id="destinationCountry"
      name="destinationCountry"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.destinationCountry}
      onChange={handleChange}
    />
  </div>
</div>

{/* Contact Information */}
<div className="col-span-2">
  <h3 className="text-xl font-medium mb-4">Contact Information</h3>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.email}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
      Phone Number
    </label>
    <input
      type="tel"
      id="phoneNumber"
      name="phoneNumber"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.phoneNumber}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <h4 className="text-sm font-medium mb-2">Address</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="mb-4">
        <label htmlFor="streetAddress" className="block text-gray-700 font-bold mb-2">
          Street Address
        </label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.streetAddress}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
          State/Province
        </label>
        <input
          type="text"
          id="state"
          name="state"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-gray-700 font-bold mb-2">
          ZIP/Postal Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading
          tight focus:outline-none focus:shadow-outline"
          value={formData.country}
          onChange={handleChange}
        >
          {/* ... Add options for countries */}
        </select>
      </div>
    </div>
  </div>
</div>

{/* Passport and Visa Details */}
<div className="col-span-2">
  <h3 className="text-xl font-medium mb-4">Passport and Visa Details</h3>
  <div className="mb-4">
    <label htmlFor="passportNumber" className="block text-gray-700 font-bold mb-2">
      Passport Number
    </label>
    <input
      type="text"
      id="passportNumber"
      name="passportNumber"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.passportNumber}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="passportExpiryDate" className="block text-gray-700 font-bold mb-2">
      Passport Expiry Date
    </label>
    <input
      type="date"
      id="passportExpiryDate"
      name="passportExpiryDate"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.passportExpiryDate}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="visaType" className="block text-gray-700 font-bold mb-2">
      Visa Type
    </label>
    <select
      id="visaType"
      name="visaType"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.visaType}
      onChange={handleChange}
    >
      <option
 
 value="">Select Visa Type</option>
 
             
 <option
  
 value="male">Tier 2 Work Visa</option>
 
             
 <option
  
 value="female">Tier 4 Student Visa</option>
 
             
 <option
  
 value="other">Medical Tourism Visa</option>
 
 <option
  
  value="other">Tourism Visa</option>
 
 <option
  
  value="other">Sponsored Visa</option>
 </select>
      {/* ... Add options for visa types */}

  </div>
</div>

{/* Additional Information (optional) */}
<div className="col-span-2">
  <h3 className="text-xl font-medium mb-4">Additional Information</h3>
  <div className="mb-4">
    <label htmlFor="travelHistory" className="block text-gray-700 font-bold mb-2">
      Travel History (Countries visited in the past 5 years)
    </label>
    <textarea
      id="travelHistory"
      name="travelHistory"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.travelHistory}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="employmentStatus" className="block text-gray-700 font-bold mb-2">
      Employment Status
    </label>
    <select
      id="employmentStatus"
      name="employmentStatus"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.employmentStatus}
      onChange={handleChange}
    >
      <option value="">Select Employment Status</option>
      <option value="employed">Employed</option>
      <option value="selfEmployed">Self-Employed</option>
      <option value="student">Student</option>
      <option value="unemployed">Unemployed</option>
      <option value="retired">Retired</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="financialInformation" className="block text-gray-700 font-bold mb-2">
      Financial Information (Proof of funds for travel)
    </label>
    <textarea
      id="financialInformation"
      name="financialInformation"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={formData.financialInformation}
      onChange={handleChange}
    />
  </div>
</div>



{/* Signature and Documents */}
<div className="col-span-2">
  <h3 className="text-xl font-medium mb-4">Signature and Documents</h3>
  <div className="mb-4">
    <label htmlFor="signaturePad" className="block text-gray-700 font-bold mb-2">
      Signature
    </label>
    <div id="signaturePad" className="w-full h-64 border border-gray-300 rounded-lg">
    <SignatureCanvas
  ref={signaturePadRef}
  onSave={(dataURL) => setSignatureData(dataURL)}/>
    </div>
  </div>
  <div className="mb-4">
    <label htmlFor="uploadDocuments" className="block text-gray-700 font-bold mb-2">
      Upload Documents
    </label>
    <input
      type="file"
      id="uploadDocuments"
      name="uploadDocuments"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      multiple
      onChange={handleFileUpload}
    />
    <p className="text-gray-600 text-xs italic">
      Supported file types: PDF, JPEG, PNG (max size: 5MB per file)
    </p>
  </div>
</div>


          {/* Terms and Conditions */}
<div className="col-span-2">
  <label htmlFor="terms-and-conditions" className="block text-gray-700 font-bold mb-2">
    I agree to the <a href="/terms-and-conditions" className="underline text-blue-500">terms and conditions</a>
  </label>
  <input
    type="checkbox"
    id="terms-and-conditions"
    className="mr-2"
    required
  />
</div>
<Link to="/application-submission"> 
<button
  type="submit"
  className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4"
>
  <span className="px-2">Submit Application</span>
  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
</button>

</Link>

    </div>
  </form>
</div>
    );
};

export default VisaApplicationForm;
