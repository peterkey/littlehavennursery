import React from 'react';
import NurseryPage from './NurseryPage';

const PentyrchPage = () => {
  console.log('PentyrchPage component rendered');
  
  const nurseryData = {
    title: "Little Haven - Pentyrch",
    type: "Wrap Around Club",
    address: "Pentyrch Primary School, Bronllwyn, Pentyrch, Cardiff CF15 9QL",
    phone: "02922781919",
    location: "pentyrch",
    service: "wrap-around-club",
    openingHours: [
      "Before School: 7:30 AM - 9:00 AM",
      "After School: 3:15 PM - 6:00 PM",
      "Holiday Club: 7:30 AM - 6:00 PM"
    ],
    description: "Little Haven Pentyrch provides high-quality wrap-around care for children attending Pentyrch Primary School. Our club offers a safe, fun, and engaging environment where children can relax, play, and socialize with their friends. We provide both before and after school care, as well as holiday club services during school breaks.",
    features: [
      "Convenient location within Pentyrch Primary School",
      "Before and after school care available",
      "Holiday club during school breaks",
      "Healthy snacks and refreshments provided",
      "Structured activities and free play time",
      "Experienced and caring staff team",
      "Safe and secure environment",
      "Regular communication with parents"
    ]
  };

  return <NurseryPage {...nurseryData} />;
};

export default PentyrchPage; 