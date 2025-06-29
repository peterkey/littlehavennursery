import React from 'react';
import NurseryPage from './NurseryPage';

const RhydlafarPage = () => {
  const nurseryData = {
    title: "Little Haven - Rhydlafar",
    type: "Day Nursery",
    address: "Rhydlafar Dr, Rhydlafar, Cardiff CF5 6HU",
    phone: "02920891825",
    openingHours: [
      "Monday - Friday: 7:30 AM - 6:00 PM",
      "Saturday - Sunday: Closed"
    ],
    description: "Welcome to Little Haven Rhydlafar, our flagship day nursery located in the heart of Rhydlafar. We provide a nurturing and stimulating environment for children aged 0-5 years, where they can learn, grow, and develop in a safe and caring setting. Our experienced staff team is dedicated to providing the highest quality childcare and early education.",
    features: [
      "Purpose-built facilities designed for early years education",
      "Large outdoor play area with age-appropriate equipment",
      "Qualified and experienced staff team",
      "Nutritious meals and snacks prepared on-site",
      "Regular parent updates and communication",
      "Flexible booking options to suit your needs",
      "Settling-in sessions for new children",
      "Regular activities and educational programs"
    ],
    images: [
      "/images/nurseries/rhydlafar/playground.jpg",
      "/images/nurseries/rhydlafar/classroom.jpg",
      "/images/nurseries/rhydlafar/outdoor.jpg",
      "/images/nurseries/rhydlafar/indoor.jpg"
    ]
  };

  return <NurseryPage {...nurseryData} />;
};

export default RhydlafarPage; 