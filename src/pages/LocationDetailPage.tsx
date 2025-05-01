import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LocationDetailPage = () => {
  return (
    <div className="min-h-screen w-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/search-results" className="flex items-center text-gray-600 hover:text-gray-900">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </Link>
        </div>

        {/* Location Title */}
        <h1 className="text-3xl font-bold mb-4">Name of the setting</h1>

        {/* Location Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">
            Upload Image and our system will find you similar setting for you to shoot your film.Upload image and
            our system will find you similar setting for you to shoot your film.Upload Image and our system will find
            you similar setting for you to shoot your film.Upload Image and our system will find you similar setting for
            you to shoot your film.Upload Image and our system will find you similar setting for you to shoot your film
          </p>
          <p className="text-gray-700 mb-4">
            Upload Image and our system will find you similar setting for you to shoot your film.Upload image and
            our system will find you similar setting for you to shoot your film.Upload Image and our system will find you similar setting for
            you to shoot your film.Upload Image and our system will find you similar setting for you to shoot your film.Upload Image and
            our system will find you similar setting for you to shoot your film.Upload Image and our system will find
            you similar setting for you to shoot your film.Upload Image and our system will find you similar setting for
            you to shoot your film
          </p>
          <p className="text-gray-700 mb-4">
            Upload Image and our system will find you similar setting for you to shoot your film.Upload image and
            our system will find you similar setting for you to shoot your film.Upload Image and our system will find
            you similar setting for you to shoot your film.Upload Image and our system will find you similar setting for
            you to shoot your film
          </p>
        </div>

        {/* Location Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Location" 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Location" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Location" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Location" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Location" 
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">For more details, Contact us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Our email</h3>
                <p className="text-gray-600">abc@email.com.pk</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-red-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Call us</h3>
                <p className="text-gray-600">+92 443535 3143</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationDetailPage;
