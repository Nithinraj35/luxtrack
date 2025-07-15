
import React from "react";

const App = () => {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">LuxTrack Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['Rolex Watch', 'Tesla Model S', 'Picasso Painting'].map((item, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="text-gray-500">Estimated Value: ${(i + 1) * 100000}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
