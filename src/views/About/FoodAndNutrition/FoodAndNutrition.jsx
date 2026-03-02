import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HygieneRating from "../../../assets/Version 1 Badges 5.png";
import HealthySnackAward from "../../../assets/SNACK-AWARD-LOGO.jpg";
import Food from "../../../assets/Food.jpg";

const ease = [0.22, 1, 0.36, 1];

const AWARDS = [
  {
    image: HealthySnackAward,
    title: "Gold Standard Healthy Snack Award",
    description: "Recognised for our commitment to balanced nutrition and healthy eating habits across the nursery.",
  },
  {
    image: null,
    title: "Freshly Cooked Daily",
    description: "Our in-house nursery cook prepares every meal fresh each morning — no reheated, processed food.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    image: HygieneRating,
    title: "5-Star Food Hygiene Rating",
    description: "Our kitchen holds a 5-star food hygiene rating — the highest possible — certified by Cardiff Council.",
  },
];

const MENUS = {
  Nursery: [
    { day: "Monday", breakfast: "Cereal and Milk", lunch: "Mixed Bean Tagine & Couscous", tea: "Cheese & Tomato Pizza Fingers", snack: "Breadsticks & Pear Sticks", drinks: "Water, Milk" },
    { day: "Tuesday", breakfast: "Cereal and Milk", lunch: "Chicken/Quorn Stew with Dumplings", tea: "Tomato & Basil Soup with Bread Roll", snack: "Warm Buttered Toasted Squares", drinks: "Water, Milk" },
    { day: "Wednesday", breakfast: "Cereal and Milk", lunch: "Chickpea Korma & Bombay Potatoes", tea: "Assorted Finger Sandwiches & Cherry Tomatoes", snack: "Apple & Pear Sticks", drinks: "Water, Milk" },
    { day: "Thursday", breakfast: "Cereal and Milk", lunch: "Chili/Lentil Con Carne & Sunshine Rice", tea: "Baked Beans on Toast", snack: "Banana Bread", drinks: "Water, Milk" },
    { day: "Friday", breakfast: "Cereal and Milk", lunch: "Macaroni Cheese with Peas & Garlic Bread", tea: "Spaghetti Loops on Toasted Triangles", snack: "Wholemeal Pitta & Salsa", drinks: "Water, Milk" },
  ],
  Baby: [
    { day: "Monday", breakfast: "Warm Porridge", lunch: "Sweet Potato & Carrot", tea: "Parsnip & Pea with Baby Rice & Fruit Puree", drinks: "Water, Milk" },
    { day: "Tuesday", breakfast: "Fruit Puree", lunch: "Cheesy Carrot Mash", tea: "Carrot & Coriander Baby Rice", drinks: "Water, Milk" },
    { day: "Wednesday", breakfast: "Baby Rice", lunch: "Cauliflower & Potato", tea: "Baby Ratatouille & Baby Yoghurt", drinks: "Water, Milk" },
    { day: "Thursday", breakfast: "Fruit Puree", lunch: "Carrots & Peas", tea: "Baby Risotto", drinks: "Water, Milk" },
    { day: "Friday", breakfast: "Baby Rice with Fruit Puree", lunch: "Courgette & Tomato", tea: "Baked Sweet Potato & Peach", drinks: "Water, Milk" },
  ],
};

const MEAL_LABELS = { breakfast: "Breakfast", lunch: "Lunch", tea: "Tea", snack: "Snack", drinks: "Drinks" };

/* ── MenuCard ────────────────────────────────────────────────────── */
const MenuCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease }}
    className="bg-white rounded-2xl shadow-soft p-6"
  >
    <h4 className="font-display text-lg font-semibold text-neutral-900 mb-4">{item.day}</h4>
    <div className="space-y-2.5">
      {Object.entries(MEAL_LABELS).map(([key, label]) =>
        item[key] ? (
          <div key={key} className="flex gap-2">
            <span className="font-sans text-xs font-semibold text-primary-600 w-16 flex-shrink-0 pt-0.5">{label}</span>
            <p className="font-sans text-xs text-neutral-600 leading-relaxed">{item[key]}</p>
          </div>
        ) : null
      )}
    </div>
  </motion.div>
);

/* ── FoodAndNutrition page ───────────────────────────────────────── */
const FoodAndNutrition = () => {
  const [activeTab, setActiveTab] = useState("Nursery");

  return (
    <div className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div className="absolute inset-0">
          <img
            src={Food}
            alt="Healthy, fresh meals at Little Haven Nursery"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(12,35,70,0.88) 0%, rgba(12,35,70,0.55) 55%, rgba(12,35,70,0.2) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14"
          style={{ minHeight: "420px", paddingTop: "7rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-px bg-white/35 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-white/45">
                About Us
              </span>
            </div>
            <h1
              className="font-display font-semibold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Nourishing little minds<br />
              <span className="text-primary-200">one meal at a time.</span>
            </h1>
            <p className="font-sans text-white/65 text-lg leading-relaxed">
              Fresh, balanced, award-winning food — prepared daily in our own kitchen by our nursery cook.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Awards section ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Our Standards
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Recognised for quality,<br />committed to health.
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              We follow the Welsh Government&apos;s Healthy Food for Childcare guidelines — and our awards prove we mean it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease }}
                className="bg-white rounded-2xl shadow-soft border border-neutral-100 p-7 hover:shadow-medium transition-all duration-300"
              >
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-20 w-auto object-contain mb-5"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center mb-5">
                    {award.icon}
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-tight">
                  {award.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu section ──────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="max-w-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary-300 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-primary-500">
                Our Menus
              </span>
            </div>
            <h2
              className="font-display font-semibold text-neutral-900 leading-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              A week of varied,<br />nourishing meals.
            </h2>
            <p className="font-sans text-neutral-500 text-lg leading-relaxed">
              Our menus rotate and are adapted for babies with weaning-appropriate portions — no child goes hungry, and every meal is made with care.
            </p>
          </motion.div>

          {/* Tab switcher */}
          <div className="flex gap-1 p-1 bg-white shadow-soft rounded-full w-fit mb-10">
            {["Nursery", "Baby"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1 ${
                  activeTab === tab
                    ? "bg-primary-600 text-white shadow-soft"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {tab === "Nursery" ? "Toddlers & Kindergarten" : "Baby Room"}
              </button>
            ))}
          </div>

          {/* Menu cards */}
          <AnimatePresence mode="wait">
            <div key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {MENUS[activeTab].map((item, index) => (
                <MenuCard key={item.day} item={item} index={index} />
              ))}
            </div>
          </AnimatePresence>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="mt-8 flex items-start gap-3 bg-white rounded-2xl shadow-soft p-6 max-w-2xl"
          >
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0 mt-2" />
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">
              Dietary requirements, allergies, and weaning plans are always discussed with parents before a child starts and reviewed regularly. We work closely with families to ensure every child&apos;s nutritional needs are met.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

FoodAndNutrition.displayName = "FoodAndNutrition";
export default memo(FoodAndNutrition);
