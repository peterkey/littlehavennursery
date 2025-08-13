import React from 'react';
import NurseryPage from './NurseryPage';

const RadyrPage = () => {
  console.log('RadyrPage component rendered');
  
  const nurseryData = {
    title: "Little Haven - Radyr",
    type: "Wrap Around Club",
    address: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
    phone: "07361 214326",
    location: "radyr",
    service: "wrap-around-club",
    openingHours: [
      "Breakfast Club: 8:00 AM - 9:00 AM",
      "Play Group: 9:00 AM - 12:00 PM",
      "Wrap Around: 12:00 PM - 13:00 PM"
    ],
    description: "Little Haven Radyr offers a welcoming and stimulating wrap-around care service in the heart of Radyr. Our club provides a safe and nurturing environment where children can enjoy a variety of activities, make new friends, and develop their social skills. We offer care options including before and after school care, as well as holiday club services.",
    features: [
      "Centrally located in Radyr",
      "Before and after school care available",
      "Holiday club during school breaks",
      "Healthy snacks and refreshments provided",
      "Diverse range of activities and games",
      "Experienced and caring staff team",
      "Safe and secure environment",
      "Regular communication with parents"
    ]
  };

  return <NurseryPage {...nurseryData} />;
};

export default RadyrPage; 