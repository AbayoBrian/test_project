import React, { useState } from 'react';

interface Props {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        className="border p-2 rounded-lg flex-grow"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button 
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        onClick={() => onSearch(city)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
