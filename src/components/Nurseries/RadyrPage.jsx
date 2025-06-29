import React from 'react';
import NurseryPage from './NurseryPage';

const RadyrPage = () => {
  const nurseryData = {
    title: "Little Haven - Radyr",
    type: "Wrap Around Club",
    address: "Old Church Rooms Hen Ysgoldy'r Eglwys, Radyr, Cardiff CF15 8DF",
    phone: "07361 214326",
    openingHours: [
      "Before School: 7:30 AM - 9:00 AM",
      "After School: 3:15 PM - 6:00 PM",
      "Holiday Club: 7:30 AM - 6:00 PM"
    ],
    description: "Little Haven Radyr offers a welcoming and stimulating wrap-around care service in the heart of Radyr. Our club provides a safe and nurturing environment where children can enjoy a variety of activities, make new friends, and develop their social skills. We offer flexible care options including before and after school care, as well as holiday club services.",
    features: [
      "Centrally located in Radyr",
      "Before and after school care available",
      "Holiday club during school breaks",
      "Healthy snacks and refreshments provided",
      "Diverse range of activities and games",
      "Experienced and caring staff team",
      "Safe and secure environment",
      "Regular communication with parents"
    ],
    images: [
      "/images/nurseries/radyr/playground.jpg",
      "/images/nurseries/radyr/indoor.jpg",
      "/images/nurseries/radyr/activities.jpg",
      "/images/nurseries/radyr/outdoor.jpg"
    ]
  };

  return <NurseryPage {...nurseryData} />;
};

export default RadyrPage; 