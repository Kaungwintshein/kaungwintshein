import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingReveal = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const loadingText = "Loading...".split("");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const letterAnimation = {
    hidden: { y: 0 },
    show: {
      y: [-2, 2, -2],
      transition: {
        repeat: Infinity,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={container}
          >
            <div className="flex items-center space-x-1">
              {loadingText.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="text-4xl font-bold inline-block text-white"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.3 }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
    </>
  );
};

export default LoadingReveal;
