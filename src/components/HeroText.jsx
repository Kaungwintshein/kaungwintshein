import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotateX: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium" variants={itemVariants}>
          Hi I'm Ali
        </motion.h1>
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
        >
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={itemVariants}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={slideVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={itemVariants}
          >
            Web Solutions
          </motion.p>
        </motion.div>
      </div>

      {/* Mobile View */}
      <motion.div
        className="flex-col space-y-6 md:hidden"
        variants={containerVariants}
      >
        <motion.p className="text-4xl font-medium" variants={itemVariants}>
          Hi, I'm Ali
        </motion.p>
        <motion.div variants={containerVariants}>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={itemVariants}
          >
            Building
          </motion.p>
          <motion.div
            variants={slideVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={itemVariants}
          >
            Web Applications
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
