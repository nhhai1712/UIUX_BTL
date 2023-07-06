import React from 'react';
import { useEffect, useState } from 'react';
const FilterButton = ({ values, onSelect }) => {
  const handleSelect = (value) => {
    onSelect(value);
  };
  const [selectedFilter, setSelectedFilter] = useState(null);
  function handleFilterClick(value) {
    if (value === selectedFilter) {
      setSelectedFilter(null); 
      onSelect(null); 
    } else {
      setSelectedFilter(value);
      onSelect(value);
    }
  }
  return (
    <div>
      {values.map((value) => (
        <button key={value} onClick={() => handleFilterClick(value)}>
          {value}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;