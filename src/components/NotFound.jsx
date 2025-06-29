import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

const NotFound = () => {
  // Function to get random animation variant
  const getRandomAnimation = useCallback(() => {
    const animations = [
      {
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        y: 0
      },
      {
        scale: 1.3,
        rotate: 360,
        y: -10
      },
      {
        scale: 1.1,
        rotate: [-45, 0, 45, 0],
        y: [0, -15, 0]
      },
      {
        scale: [1, 1.2, 1],
        rotate: 0,
        y: [-20, 0, -20]
      }
    ];
    return animations[Math.floor(Math.random() * animations.length)];
  }, []);

  const toyVariants = {
    hover: (i) => ({
      ...getRandomAnimation(),
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const floatingToys = [
    { emoji: "🎨", delay: 0, left: "10%", top: "20%", scale: 1.2 },    // Art palette
    { emoji: "📚", delay: 0.2, right: "15%", top: "15%", scale: 1.1 },  // Books
    { emoji: "🧩", delay: 0.4, left: "20%", bottom: "25%", scale: 1 },  // Puzzle piece
    { emoji: "🎵", delay: 0.6, right: "20%", bottom: "20%", scale: 1.2 }, // Musical note
    { emoji: "✏️", delay: 0.8, left: "15%", top: "50%", scale: 0.9 },   // Pencil
    { emoji: "🎭", delay: 1, right: "25%", top: "40%", scale: 1.1 },    // Theater/Drama
    { emoji: "🧸", delay: 1.2, left: "30%", top: "30%", scale: 1 },     // Teddy bear
    { emoji: "🌈", delay: 1.4, right: "10%", bottom: "30%", scale: 1.3 }, // Rainbow
    { emoji: "🔢", delay: 1.6, left: "25%", bottom: "40%", scale: 1 },   // Numbers
    { emoji: "🎨", delay: 1.8, right: "30%", top: "25%", scale: 1.1 }   // Art palette
  ];

  // Random float animation paths
  const getRandomFloat = useCallback(() => {
    const paths = [
      { x: [0, 10, -10, 0], y: [0, -10, 0], rotate: [0, 5, -5, 0] },
      { x: [0, -15, 15, 0], y: [0, 5, -5, 0], rotate: [0, -10, 10, 0] },
      { x: [0, 5, -5, 0], y: [0, -15, 15, 0], rotate: [0, 15, -15, 0] }
    ];
    return paths[Math.floor(Math.random() * paths.length)];
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex items-center justify-center p-4 overflow-hidden">
      {/* Floating Toys */}
      {floatingToys.map((toy, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl cursor-pointer"
          style={{ 
            left: toy.left, 
            right: toy.right, 
            top: toy.top, 
            bottom: toy.bottom,
            fontSize: `${toy.scale * 2.5}rem`
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            ...getRandomFloat()
          }}
          transition={{
            delay: toy.delay,
            duration: 3 + (index * 0.2),
            repeat: Infinity,
            repeatType: "reverse"
          }}
          whileHover="hover"
          variants={toyVariants}
          custom={index}
        >
          {toy.emoji}
        </motion.div>
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Animated Elements */}
        <div className="relative h-64 mb-8">
          {/* Bouncing Numbers */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-20, 0, -20] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-1/2 -translate-x-1/2 flex gap-4"
          >
            {['4', '0', '4'].map((num, index) => (
              <motion.span
                key={index}
                className="font-display text-display-2xl font-bold text-primary-400"
                whileHover={() => ({
                  scale: 1.2,
                  rotate: index === 1 ? [0, 360] : index === 0 ? 360 : -360,
                  transition: { 
                    duration: 0.5,
                    rotate: { duration: 0.8 }
                  }
                })}
              >
                {num}
              </motion.span>
            ))}
          </motion.div>

          {/* Animated Shapes */}
          <motion.div
            animate={{ 
              x: [0, 10, -10, 0],
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-12 h-12 bg-lavender-300 rounded-full opacity-60"
          />
          <motion.div
            animate={{ 
              x: [0, -10, 10, 0],
              y: [0, 10, 0],
              rotate: [0, -10, 10, 0],
              scale: [1, 0.9, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-mint-300 rounded-lg opacity-60"
          />
        </div>

        {/* Text Content with Enhanced Animations */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-display-lg font-bold text-primary-900 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Oops! We're Playing Hide and Seek!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-body-lg text-primary-700 mb-8"
        >
          The page you're looking for seems to be hiding! 
          Let's go back and find something fun to do instead.
        </motion.p>

        {/* Interactive Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white font-display text-body-lg px-8 py-3 rounded-full shadow-lg transition-colors duration-200 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white opacity-25"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              Let's Go Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 