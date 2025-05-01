import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navber from "../components/Navbar";

import { Search } from "lucide-react";
import SearchPopover from "@/components/SearchPopover";
import InputTig from "@/components/InputTig";

const ImageSearchPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [showUploader, setShowUploader] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleImageUpload = () => {
    setShowUploader((open) => !open);

    // if (e.target.files && e.target.files[0]) {
    //   const file = e.target.files[0];
    //   setSelectedImage(file);
    //   setPreviewUrl(URL.createObjectURL(file));
    // }
  };

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
    <div className=" flex flex-col  min-h-screen w-screen bg-white">
      {/* Navigation */}
      <Navber />

      {/* Main Content */}
      <div className=" flex flex-col items-center self-stretch gap-12  bg-white">
        <main className=" self-stretch w-[864px] mx-auto ">
          <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
            <h1 className="self-stretch text-center font-Manrope text-4xl/normal text-black font-medium not-italic">
              Upload Image to search
            </h1>
            <p className="self-stretch text-center text-base/normal font-medium not-italic text-theme-gray-800 mb-12">
              Upload Image and our system will find you similar setting for you
              to shoot your film
            </p>
          </div>

          <InputTig/>
          {/* Button */}
          {!showUploader && (
            <div className="justify-center items-center mt-8 text-center">
              <button
                className=" bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-3 rounded-none transition duration-300"
                onClick={handleSearch}
                // disabled={!selectedFile}
              >
                Search
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ImageSearchPage;
