import { useState } from 'react';
import Navber from '../components/Navbar';

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col slef-stretch gamin-h-screen w-screen bg-white">
      {/* Navigation */}
      <Navber/>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-16">For more details, Contact us</h1>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {/* Email Contact */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Our email</h2>
            <p className="text-gray-600">abc@email.com.pk</p>
          </div>

          {/* Phone Contact */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Call us</h2>
            <p className="text-gray-600">+942 443535 3143</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
