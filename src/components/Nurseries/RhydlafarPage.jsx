import React from 'react';
import NurseryPage from './NurseryPage';

const RhydlafarPage = () => {
  console.log('RhydlafarPage component rendered');
  
  const nurseryData = {
    title: "Little Haven - Rhydlafar",
    type: "Day Nursery",
    address: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
    phone: "02920891825",
    location: "rhydlafar",
    service: "day-nursery",
    openingHours: [
      "Monday - Friday: 7:30 AM - 17:30 PM",
      "Saturday - Sunday: Closed"
    ],
    description: "Welcome to Little Haven Rhydlafar, our flagship day nursery located in the heart of Rhydlafar. We provide a nurturing and stimulating environment for children aged 0-5 years, where they can learn, grow, and develop in a safe and caring setting. Our experienced staff team is dedicated to providing the highest quality childcare and early education.",
    features: [
      "Purpose-built facilities designed for early years education",
      "Large outdoor play area with age-appropriate equipment",
      "Qualified and experienced staff team",
      "Nutritious meals and snacks prepared on-site",
      "Regular parent updates and communication",
      "Booking options available to suit your needs",
      "Settling-in sessions for new children",
      "Regular activities and educational programs"
    ]
  };

  return <NurseryPage {...nurseryData} />;
};

export default RhydlafarPage; 