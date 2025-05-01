import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SearchPopover() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSearch = () => {
    // Navigate to search results page
    navigate("/search-results");
  };

  return (
    <div>
      <button
        className="absolute right-12 top-1/2 transform -translate-y-1/2"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 21C9.21 16.249 13.941 9.948 21 14.673M17 4.5C17.491 3.994 18.8 2 19.5 2M19.5 2C20.2 2 21.509 3.994 22 4.5M19.5 2V10"
            stroke="#797979"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 13C20.998 17.147 20.947 19.27 19.609 20.609C18.217 22 15.979 22 11.5 22C7.022 22 4.782 22 3.391 20.609C2 19.218 2 16.979 2 12.5C2 8.022 2 5.782 3.391 4.391C4.782 3 7.021 3 11.5 3H14"
            stroke="#797979"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full right-0  flex flex-col items-center gap-5   bg-white p-6 shadow-Md  ">
          <div
            className={`flex bg-gray-50 w-[490px]  p-6 flex-col justify-center items-center border-2 border-dashed  text-center ${
              isDragging ? "border-blue-500 bg-blue-50" : "border-blue-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {previewUrl ? (
              <div className="mb-4">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-64 mx-auto"
                />
              </div>
            ) : (
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.9157 3.61084H41.4164C43.9429 3.61084 46 5.69071 46 8.24499V28.634C46 31.1883 43.9429 33.2681 41.4164 33.2681H13.9157C11.3896 33.2681 9.33234 31.1883 9.33234 28.634V8.24499C9.33234 5.69071 11.3896 3.61084 13.9157 3.61084ZM41.4164 7.31809H13.9157C13.4098 7.31809 12.9992 7.73314 12.9992 8.2449V25.7407L18.0593 20.6266C19.3115 19.3589 21.3521 19.3589 22.606 20.6266L24.8243 22.8639L31.6337 14.6009C32.2423 13.863 33.1333 13.4368 34.083 13.4314C35.0381 13.4534 35.9273 13.8427 36.5417 14.5711L42.3332 21.4034V8.24499C42.3332 7.73323 41.9226 7.31809 41.4164 7.31809ZM6.96368 31.3196C7.91177 34.1482 10.5224 36.0481 13.4575 36.0481H40.0726L38.421 41.3583C37.9533 43.164 36.2848 44.3892 34.459 44.3892C34.1026 44.3889 33.7478 44.3428 33.4029 44.2521L5.05316 36.5762C2.86608 35.9664 1.56255 33.6775 2.13456 31.4697L6.58228 16.4595V29.0973C6.58228 29.7275 6.67596 30.3575 6.89957 31.1065L6.96368 31.3196ZM22.1659 12.8785C22.1659 14.923 20.5217 16.5857 18.4994 16.5857C16.4771 16.5857 14.8325 14.9229 14.8325 12.8785C14.8325 10.834 16.477 9.1712 18.4994 9.1712C20.5217 9.1712 22.1659 10.8339 22.1659 12.8785Z"
                    fill="#989FA4"
                  />
                </svg>
              </div>
            )}

            <label className="cursor-pointer">
              <span className="font-Manrope text-lg/7 not-italic font-semibold text-blue-400 hover:text-blue-600">
                Click to upload
              </span>
              <span className="font-Manrope text-lg/7 not-italic font-semibold text-gray-800">
                {" "}
                or drag and drop
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleFileChange}
              />
            </label>
            <p className="font-Manrope text-base not-italic font-semibold text-gray-500 mt-2">
              JPG, JPEG, PNG less than 1MB
            </p>
          </div>

          <div className="justify-center items-center text-center">
            <button
              className=" bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-3 rounded-none transition duration-300"
              onClick={handleSearch}
              disabled={!selectedFile}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPopover;
