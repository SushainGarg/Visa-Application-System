import React, { useState, useEffect } from 'react';

export default function ApplicationStatusList() {
   const applications = [  // Replace with your actual application data
    {
      id: 1,
      visaType: 'Tier 2 Work Visa',
      submittedDate: '2023-04-01',
      status: 'Pending',
    },
    {
      id: 2,
      visaType: 'Tier 4 Student Visa',
      submittedDate: '2023-08-03',
      status: 'Pending',
    },
    {
      id: 3,
      visaType: 'Tourist Visa',
      submittedDate: '2023-09-02',
      status: 'Pending',
    },
    {
      id: 4,
      visaType: 'Sponsored Visa',
      submittedDate: '2023-10-15',
      status: 'Pending',
    },
    {
      id: 5,
      visaType: 'Tier 4 Student Visa',
      submittedDate: '2023-10-20',
      status: 'Pending',
    },
    {
      id: 6,
      visaType: 'Medical Tourism Visa',
      submittedDate: '2024-01-11',
      status: 'Pending',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6">Recent Application Status</h2>
      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application) => (
          <li key={application.id}>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-medium mb-2">{application.visaType}</h3>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3l3-3v-4m-6 4h12V4a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v4z"
                  />
                </svg>
                <span className="text-sm">{application.submittedDate}</span>
              </div>
              <p className="text-gray-600 mb-2">
                Status: <span className="font-semibold">{application.status}</span>
              </p>
              {application.status === 'Pending' && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Track Details
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
