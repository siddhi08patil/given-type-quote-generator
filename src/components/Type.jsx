import React, { useState } from 'react';

function Type({ setCategory }) {
  const [catagory, setcatagory] = useState('');

  const handleSubmit = () => {
    if (catagory.trim() === '') return; // Prevent empty submissions
    setCategory(catagory); // Pass the category to the parent
    setcatagory(''); // Clear the input field
  };

  return (
    <div>
      <input
        className="area"
        type="text"
        placeholder="Enter category"
        value={catagory}
        onChange={(e) => setcatagory(e.target.value)} // Update state on input change
      />
      <button onClick={handleSubmit}>Submit</button> {/* Handle submission */}
    </div>
  );
}

export default Type;
