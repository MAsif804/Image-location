import React from 'react';

interface FilterButtonProps {
  onClick: () => void;
  activeFiltersCount?: number;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick, activeFiltersCount = 0 }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1.66675 4.44446H18.3334M4.44453 10H15.5556M7.77786 15.5556H12.2223" stroke="#797979" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
     
     
    </button>
  );
};

export default FilterButton;
