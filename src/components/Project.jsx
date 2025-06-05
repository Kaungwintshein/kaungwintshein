import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeIn, slideIn } from "../utils/animations";

const Project = ({
  title,
  slug,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  index,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn("up", index * 0.2)}
    >
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <motion.div variants={slideIn("left", "spring", index * 0.2, 0.75)}>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <motion.span
                key={tag.id}
                whileHover={{ scale: 1.1 }}
                className="transition-colors duration-200 hover:text-sand-900"
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.button
          onClick={() => navigate(`/project/${slug}`)}
          className="flex items-center gap-1 cursor-pointer"
          whileHover={{ scale: 1.05, x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Read More
          <motion.img
            src="assets/arrow-right.svg"
            className="w-5"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </motion.button>
      </div>
      <motion.div
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"
        variants={fadeIn("up", index * 0.3)}
      />
    </motion.div>
  );
};

export default Project;
