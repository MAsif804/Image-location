import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navber from '../components/Navbar';

const BookingEnquiryPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
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
        navigate('/search-results');
    };
    return (
        <div className=" min-h-screen w-screen bg-white">
            {/* Navigation */}
            <Navber />

            {/* Main Content */}
            <main className=" flex-col items-center gap-10 self-stretch mx-auto px-6 py-4">
                <div className='flex flex-col items-center gap-3 w-lg'>
                    <h1 className="self-stretch text-center font-Manrope text-4xl/normal text-black font-medium not-italic">Booking Enquiry</h1>
                    <p className="self-stretch text-center text-base/normal font-medium not-italic text-gray-600 mb-12">
                        Fill out the form below to make a booking enquiry.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-3 w-lg">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none"
                    ></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Submit Enquiry
                    </button>   
                </div>
            </main>
        </div>
    );
}   

export default BookingEnquiryPage;