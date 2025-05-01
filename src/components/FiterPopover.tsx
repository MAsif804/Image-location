import { useState } from "react";

export interface FilterValues {
  priceRange: [number, number];
  attendees: string;
  minimumHours: number;
  popularTypes: string[];
}

interface FiterPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
}



const FiterPopover: React.FC<FiterPopoverProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([100, 3000]);
  const [attendees, setAttendees] = useState<string>("1 - 5 people");
  const [minimumHours, setMinimumHours] = useState<number>(0);
  const [popularTypes, setPopularTypes] = useState<string[]>([
    "Apartment",
    "Cafe",
  ]);

  const attendeeOptions = [
    "1 - 5 people",
    "1 - 15 people",
    "15 - 20 people",
    "20 - 25 people",
    "25 - 35 people",
    "35 - 40 people",
  ];

  const typeOptions = [
    "Apartment",
    "Bar",
    "Cafe",
    "Club",
    "Condo",
    "Event Space",
  ];

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };

  const handleAttendeesChange = (value: string) => {
    setAttendees(value);
  };

  

  const handleTypeToggle = (type: string) => {
    if (popularTypes.includes(type)) {
      setPopularTypes(popularTypes.filter((t) => t !== type));
    } else {
      setPopularTypes([...popularTypes, type]);
    }
  };
  

  const handleClear = () => {
    setPriceRange([100, 3000]);
    setAttendees("1 - 5 people");
    setMinimumHours(0);
    setPopularTypes([]);
  };

  const handleSave = () => {
    onApplyFilters({
      priceRange,
      attendees,
      minimumHours,
      popularTypes,
    });
    onClose();
  };

  const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };

  if (!isOpen) return null;

  return (
    <div className="flex justify-center gap-9 absolute   top-full right-0  bg-black bg-opacity-50 z-50s hadow-Md rounded-full ">
      <div className="flex flex-col bg-white   w-[454px] max-w-md h-full  gap-9 p-6">
        <div className="flex  justify-between gap-6 w-[406px] items-start ">
          <h2 className="text-theme-blue-900 text-xl/5 not-italic font-Roboto font-semibold">
            Filters
          </h2>
          <button onClick={onClose} className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-6 items-start w-[406px]">
          {/* Price Range */}
          <div className="flex flex-col items-start gap-2 w-full mx-auto">
            <h3 className="flex-[1_0_0] text-theme-gray/70 font-Manrope text-base/6 not-italic font-semibold">
              Price Range
            </h3>
            <div className="flex items-center gap-3 px-[18px] py-[10px] border border-theme-bar-2  w-full">
              <div className="flex items-center gap-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M16.7328 16.2068L13.4965 12.9183M15.2927 8.69504C15.2663 12.0086 12.5586 14.6734 9.245 14.6469C5.9314 14.6204 3.26666 11.9128 3.29313 8.59917C3.3196 5.28557 6.02727 2.62083 9.34087 2.6473C12.6545 2.67377 15.3192 5.38144 15.2927 8.69504Z" stroke="#989FA4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="text-theme-gray-600 font-Inter text-sm font-normal not-italic">Seach</p>
              </div>
            </div>
          </div>
          <hr className="bg-theme-bar-2 w-full" />

          {/* Jurisdication */}
          <div className="flex flex-col items-start gap-2 w-full mx-auto">
            <h3 className="flex-[1_0_0] text-theme-gray/70 font-Manrope text-base/6 not-italic font-semibold">
              Jurisdication
            </h3>
            
          </div>
          <hr className="bg-theme-bar-2 w-full" />

          {/* Attendees */}
          <div className="flex flex-col items-start gap-3 w-[406px]">
            <h3 className="flex-[1_0_0] text-theme-gray/70  font-Manrope text-base/6 not-italic font-semibold">Attendees</h3>
            <div className=" grid grid-cols-2 gap-x-14 gap-y-4 w-[406px]">
              {attendeeOptions.map((option) => (
                <div key={option} className="flex items-center gap-3">
                  <input
                    type="radio"
                    id={option}
                    name="attendees"
                    checked={attendees === option}
                    onChange={() => handleAttendeesChange(option)}
                    className=" w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500"
                  />
                  <label
                    htmlFor={option}
                    className="text-theme-gray-800 font-Roboto text-xs/4 font-normal"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="bg-theme-bar-2 w-full" />

          {/* Minimum Hours */}
          <div className="flex flex-col items-start w-[406px] gap-3">
            <h3 className="flex-[1_0_0] text-theme-gray/70  font-Manrope text-base/6 not-italic font-semibold">Minimum Hours</h3>
            
            
          </div>

          <hr className="bg-theme-bar-2 w-full" />

          {/* Popular Types */}
          <div className="flex flex-col items-start  w-[406px] gap-3">
            <h3 className="flex-[1_0_0] text-theme-gray/70  font-Manrope text-base/6 not-italic font-semibold">Popular Types</h3>
            <div className="grid grid-cols-2 gap-x-14 gap-y-4 w-[406px]">
              {typeOptions.map((type) => (
                <div key={type} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={type}
                    checked={popularTypes.includes(type)}
                    onChange={() => handleTypeToggle(type)}
                    className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <label htmlFor={type} className=" text-theme-gray-800 font-Roboto text-xs/4 font-normal">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="bg-theme-bar-2 w-full" />

        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center self-stretch">
          <button
            onClick={handleClear}
            className="px-6 py-2 text-theme-gray-900 font-Roboto text-sm/6 not-italic font-medium bg-white hover:text-gray-900"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiterPopover;
