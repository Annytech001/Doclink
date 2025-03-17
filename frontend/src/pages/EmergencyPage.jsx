import React from "react";

const EmergencyPage = () => {
  const handleBooking = () => {
    alert("Ambulance booking initiated!");
    // You can replace this with navigation or API request logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-red-600">🚨 Emergency Alert!</h1>
        <p className="text-gray-700 mt-3">
          Need urgent medical help? Book an ambulance now and get assistance in minutes.
        </p>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleBooking}
            className="bg-red-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all"
          >
            🚑 Book Now
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          We ensure fast and reliable emergency response.
        </p>
      </div>
    </div>
  );
};

export default EmergencyPage;
