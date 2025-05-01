// Define your TypeScript interfaces here for reuse across components

export interface Location {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface BookingEnquiry {
  locationId: number;
  name: string;
  email: string;
  phone: string;
  startDate: Date;
  endDate: Date;
  projectType: string;
  additionalInfo: string;
}

export interface PropertyListing {
  name: string;
  address: string;
  description: string;
  propertyType: string;
  features: string[];
  availableDates: {
    start: Date;
    end: Date;
  }[];
  images: string[];
  ownerInfo: {
    name: string;
    email: string;
    phone: string;
  };
}