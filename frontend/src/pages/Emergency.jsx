import React from 'react'
import { assets } from '../assets/assets'

const EmergencyRequest = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Emergency Request (Ambulance)</h1>
      
      <p className="text-gray-700 text-lg text-center max-w-lg">
        A patient has requested an ambulance. The nearest hospital and ambulance service have been alerted. You can track the ambulance in real-time below.
      </p>

      {/* Placeholder for real-time tracking */}
      <div className="w-full max-w-md h-64 bg-white shadow-md rounded-lg my-6 flex items-center justify-center">
        <p className="text-gray-500">[Live Tracking Map Placeholder]</p>
      </div>

      {/* Ambulance Image */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Ambulance_in_Malaysia.jpg" 
        alt="Ambulance"
        className="w-64 h-auto rounded-lg shadow-lg mb-4"
      />

      {/* Navigate to Hospital Page */}
      <button 
        onClick={() => navigate("/hospital")}
        className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition duration-300"
      >
        Go to Hospital Page
      </button>
    </div>
  );
};

export default EmergencyRequest;
