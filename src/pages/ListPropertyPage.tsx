import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroBackground from '../assets/hero-bg.jpeg';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import NavbarMain from '@/components/NavbarMain';

const ListPropertyForm = () => {
  const [isListed, setIsListed] = useState<string>("yes");
  const [isForSale, setIsForSale] = useState<string>("yes");
  const [userRole, setUserRole] = useState<string>("owner");
  
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <div className="relative w-full h-[323px] shrink-0 aspect-[105/] ">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 " 
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            height: "100%",
            width: "100%",
            filter: "brightness(0.6)"
          }}
        />

        {/* Navigation Bar */}
        <NavbarMain />

        {/* Page Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-center font-Manrope text-[50px]/[70px] not-italic font-medium  ">List My Property</h1>
        </div>
      </div>

      {/* Form Content */}
      <div className=" mx-auto px-4 py-12 w-[623px]">
        <form onSubmit={handleSubmit} className="space-y-8">
         
         <div className=" flex flex-col  gap-[50px]">
           {/* Name Fields */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-[63px]">
            <div className="space-y-2">
              {/* <Label htmlFor="firstName">First Name</Label> */}
              <Input id="firstName" placeholder="First Name" />
            </div>
            <div className="space-y-2">
              {/* <Label htmlFor="lastName">Last Name</Label> */}
              <Input id="lastName" placeholder="Last Name" />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[63px]">
            <div className="space-y-2">
              {/* <Label htmlFor="email">Email</Label> */}
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              {/* <Label htmlFor="phone">Phone</Label> */}
              <Input id="phone" type="tel" placeholder="Phone" />
            </div>
          </div>

          {/* Address Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[63px]">
            <div className="space-y-2">
              {/* <Label htmlFor="streetAddress">Street Address</Label> */}
              <Input id="streetAddress" placeholder="Street Address" />
            </div>
            <div className="space-y-2">
              {/* <Label htmlFor="city">City</Label> */}
              <Input id="city" placeholder="City" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[63px]">
            <div className="space-y-2">
              {/* <Label htmlFor="state">State</Label> */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {usStates.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase()}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              {/* <Label htmlFor="zipCode">Zip Code</Label> */}
              <Input id="zipCode" placeholder="Zip Code" />
            </div>
          </div>
         </div>

          {/* Radio Options */}
          <div className="space-y-4"> 
            <div className="space-y-2">
              <Label>Is this location listed on any other location platforms such as Airbnb or Peerspace?</Label>
              <RadioGroup value={isListed} onValueChange={setIsListed} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="platformYes" />
                  <Label htmlFor="platformYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="platformNo" />
                  <Label htmlFor="platformNo">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Is this location currently listed for sale?</Label>
              <RadioGroup value={isForSale} onValueChange={setIsForSale} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="saleYes" />
                  <Label htmlFor="saleYes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="saleNo" />
                  <Label htmlFor="saleNo">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Are you currently:</Label>
              <RadioGroup value={userRole} onValueChange={setUserRole} className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="owner" id="roleOwner" />
                  <Label htmlFor="roleOwner">Property Owner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="manager" id="roleManager" />
                  <Label htmlFor="roleManager">Property Manager</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="roleOther" />
                  <Label htmlFor="roleOther">Other</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Property Images</Label>
            <div className="border-2 border-dashed border-blue-300 rounded-md p-10 text-center bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer font-medium text-blue-500 hover:text-blue-600"
                  >
                    <span>Click to upload</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  JPG, JPEG, PNG less than 1MB
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Please upload 4-8 images
                </p>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={4} />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListPropertyForm;