import React from 'react';
import Navbar from '../components/Navbar';

const ProjectPage: React.FC = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Downtown Cityscape',
      description: 'Urban setting with modern architecture and bustling streets.',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      client: 'Metro Films',
      date: 'January 2023',
    },
    {
      id: 2,
      title: 'Rustic Farmhouse',
      description: 'Authentic rural setting with vintage charm and natural landscapes.',
      image: 'https://images.unsplash.com/photo-1516012998002-7c4de3b49df3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      client: 'Countryside Productions',
      date: 'March 2023',
    },
    {
      id: 3,
      title: 'Modern Office Space',
      description: 'Contemporary corporate environment with sleek design and open floor plan.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      client: 'Business Media Inc.',
      date: 'May 2023',
    },
    {
      id: 4,
      title: 'Coastal Beach House',
      description: 'Stunning oceanfront property with panoramic views and sandy beaches.',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      client: 'Seaside Studios',
      date: 'July 2023',
    },
    {
      id: 5,
      title: 'Historic Mansion',
      description: 'Elegant period property with classic architecture and formal gardens.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      client: 'Heritage Films',
      date: 'September 2023',
    },
    {
      id: 6,
      title: 'Industrial Warehouse',
      description: 'Raw, spacious setting with industrial features and unique lighting.',
      image: 'https://images.unsplash.com/photo-1565331423083-9ab79f6cac9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      client: 'Urban Visuals',
      date: 'November 2023',
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-black text-2xl font-semibold mb-4">Projects</h1>
      </main>
    </div>
  );
};

export default ProjectPage;