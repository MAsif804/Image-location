import { useState } from "react";
import SearchPopover from "./SearchPopover";
import FiterPopover, { FilterValues } from "@/components/FiterPopover";
import FiterButton from "./FiterButton";

function InputTig() {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
    const [isFilterOpen, setIsFilterOpen] = useState(false)
        const [activeFilters, setActiveFilters] = useState<FilterValues>({
        priceRange: [100, 3000],
        attendees: "1 - 5 people",
        minimumHours: 0,
        popularTypes: ["Apartment", "Cafe"]
    })
    const [activeFiltersCount, setActiveFiltersCount] = useState(2);
    
      const toggleFiterPopover = () => {
        setIsFilterOpen(!isFilterOpen)
      }
    
      const handleApplyFilters = (filters: FilterValues) => {
        setActiveFilters(filters)
        
        // Calculate number of active filters
        let count = 0
        if (filters.priceRange[0] !== 100 || filters.priceRange[1] !== 3000) count++
        if (filters.attendees !== "1 - 5 people") count++
        if (filters.minimumHours !== 0) count++
        if (filters.popularTypes.length > 0) count++
        
        setActiveFiltersCount(count)
      }
  return (
    <div className="relative z-10">
                {/* Search Input */}
                <div className=" flex  items-center mb-4 w-full mx-auto ">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-Md  w-full pl-10 p-3  focus:outline-none"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    
                  </div>
                    <SearchPopover />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <FiterButton onClick={toggleFiterPopover} activeFiltersCount={activeFiltersCount} />
                    </div>
                    <FiterPopover 
                    isOpen={isFilterOpen} 
                    onClose={toggleFiterPopover} 
                    onApplyFilters={handleApplyFilters} 
                    />

                    {/* <input
                    id="upload-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  /> */}
                  
                </div>
    
                {/* Upload Area */}
                
              </div>
  )
}

export default InputTig
