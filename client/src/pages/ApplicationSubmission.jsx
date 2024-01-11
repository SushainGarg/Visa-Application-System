import React from 'react'
import { Link } from 'react-router-dom'

export default function ApplicationSubmission() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Application Submitted Successfully!
          </h2>
          <div className="text-center">
            <svg
              className="w-16 h-16 text-green-500 mb-4"

              
fill="none"

              
stroke="currentColor"

              
viewBox="0 0 24 24"

              
xmlns="http://www.w3.org/2000/svg"
            >

              
<path

                
strokeLinecap="round"

                
strokeLinejoin="round"

                
strokeWidth={2}

                
d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />

            
</svg>

          
</div>

          
<p
 
className="mb-6 text-center">
            Thank you for submitting your visa application. It has been
            successfully received and will be processed as soon as possible.
          </p>
          <p className="text-center">
            You will receive an email notification when a decision has been made
            on your application.
          </p>

          
<div
 
className="flex justify-center mt-6">

<Link to='/application-status-list'> 
<button

              
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Application Status
            </button>
</Link>  

          </div>
        </div>
      </div>
    </div>
  )
}
