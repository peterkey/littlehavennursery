import { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaAward } from "react-icons/fa";
import HygieneRating from "../../../assets/Version 1 Badges 5.png";
import HealthySnackAward from "../../../assets/SNACK-AWARD-LOGO.jpg";

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

const AwardCard = ({ icon: Icon, image, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        {image ? (
          <img src={image} alt={title} className="w-auto h-32 mx-auto mb-6 object-contain" />
        ) : (
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-400 to-blue-500 
                        rounded-xl flex items-center justify-center shadow-lg transform 
                        group-hover:scale-110 transition-transform duration-300">
            <Icon className="text-white text-2xl" />
          </div>
        )}
        <h4 className="text-xl font-bold text-primary-900 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const MenuCard = ({ day, breakfast, lunch, tea, snack, drinks }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary-100 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <h4 className="text-2xl font-bold text-primary-900 mb-4">{day}</h4>
        <div className="space-y-3">
          <p className="text-gray-600">
            <span className="font-semibold text-primary-700">Breakfast:</span> {breakfast}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-primary-700">Lunch:</span> {lunch}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-primary-700">Tea:</span> {tea}
          </p>
          {snack && (
            <p className="text-gray-600">
              <span className="font-semibold text-primary-700">Snack:</span> {snack}
            </p>
          )}
          <p className="text-gray-600">
            <span className="font-semibold text-primary-700">Drinks:</span> {drinks}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const FoodAndNutrition = () => {
  const [activeTab, setActiveTab] = useState("Nursery");

  const awards = [
    {
      image: HealthySnackAward,
      title: "Gold Standard Healthy Snack Award",
      description: "Recognized for our commitment to balanced nutrition and healthy eating habits."
    },
    {
      icon: FaUtensils,
      title: "Freshly Cooked Meals",
      description: "Our in-house nursery cook prepares meals fresh daily for the children."
    },
    {
      image: HygieneRating,
      title: "5 Food Hygiene Rating",
      description: "Our kitchen is hygiene certified to ensure safety and cleanliness."
    }
  ];

  const menus = {
    Nursery: [
      {
        day: "Monday",
        breakfast: "Cereal and Milk",
        lunch: "Mixed Bean Tagine & Couscous",
        tea: "Cheese & Tomato Pizza Fingers",
        snack: "Breadsticks & Pear Sticks",
        drinks: "Water, Milk",
      },
      {
        day: "Tuesday",
        breakfast: "Cereal and Milk",
        lunch: "Chicken/Quorn Stew with Dumplings",
        tea: "Tomato & Basil Soup with Bread Roll",
        snack: "Warm Buttered Toasted Squares",
        drinks: "Water, Milk",
      },
      {
        day: "Wednesday",
        breakfast: "Cereal and Milk",
        lunch: "Chickpea Korma & Bombay Potatoes",
        tea: "Assorted Finger Sandwiches & Cherry Tomatoes",
        snack: "Apple & Pear Sticks",
        drinks: "Water, Milk",
      },
      {
        day: "Thursday",
        breakfast: "Cereal and Milk",
        lunch: "Chili/Lentil Con Carne & Sunshine Rice",
        tea: "Baked Beans on Toast",
        snack: "Banana Bread",
        drinks: "Water, Milk",
      },
      {
        day: "Friday",
        breakfast: "Cereal and Milk",
        lunch: "Macaroni Cheese with Peas & Garlic Bread",
        tea: "Spaghetti Loops on Toasted Triangles",
        snack: "Wholemeal Pitta Bread Fingers & Salsa",
        drinks: "Water, Milk",
      },
    ],
    Baby: [
      {
        day: "Monday",
        breakfast: "Warm Porridge",
        lunch: "Sweet Potato & Carrot",
        tea: "Parsnip & Pea with Baby Rice & Fruit Puree",
        drinks: "Water, Milk",
      },
      {
        day: "Tuesday",
        breakfast: "Fruit Puree",
        lunch: "Cheesy Carrot Mash",
        tea: "Carrot & Coriander Baby Rice",
        drinks: "Water, Milk",
      },
      {
        day: "Wednesday",
        breakfast: "Baby Rice",
        lunch: "Cauliflower & Potato",
        tea: "Baby Ratatouille & Baby Yoghurt",
        drinks: "Water, Milk",
      },
      {
        day: "Thursday",
        breakfast: "Fruit Puree",
        lunch: "Carrots & Peas",
        tea: "Baby Risotto",
        drinks: "Water, Milk",
      },
      {
        day: "Friday",
        breakfast: "Baby Rice with Fruit Puree",
        lunch: "Courgette & Tomato",
        tea: "Baked Sweet Potato & Peach",
        drinks: "Water, Milk",
      },
    ],
  };

  return (
    <motion.section variants={sectionVariants} className="py-24">
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary-600 mb-6"
          >
            Our Menu & Nutrition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            At Little Haven, we believe in healthy, balanced, and delicious meals for every child. We follow The
            Welsh Government's Healthy Food for Childcare guidelines, have achieved the Gold Standard Healthy Snack
            Award, and maintain a 5 food hygiene rating.
          </motion.p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>

        {/* Menu Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-600 mb-8">Example Menus</h3>
            <div className="inline-flex gap-4 p-1 bg-white/50 backdrop-blur-sm rounded-xl">
              <button
                onClick={() => setActiveTab("Nursery")}
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  activeTab === "Nursery"
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-transparent text-primary-600 hover:bg-primary-50"
                }`}
              >
                Toddlers & Kindergarten
              </button>
              <button
                onClick={() => setActiveTab("Baby")}
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  activeTab === "Baby"
                    ? "bg-primary-500 text-white shadow-lg"
                    : "bg-transparent text-primary-600 hover:bg-primary-50"
                }`}
              >
                Baby Room
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menus[activeTab].map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FoodAndNutrition;
