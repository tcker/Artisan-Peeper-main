import React, { useState } from 'react';

const Try = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleDivClick = () => {
    // Toggle between two options
    setSelectedOption(prevOption => (prevOption === 'option1' ? 'option2' : 'option1'));
  };
  
  return (
    <div
      className="w-96 bg-slate-500 flex justify-between p-4"
      onClick={handleDivClick}
    >
      <label htmlFor="option1">
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={() => setSelectedOption('option1')}
        />
        Option 1
      </label>

      <label htmlFor="option2">
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={() => setSelectedOption('option2')}
        />
        Option 2
      </label>
    </div>
  );
};

export default Try