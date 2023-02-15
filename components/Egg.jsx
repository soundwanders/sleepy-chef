import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Egg = () => {
  const y = useMotionValue(0);
  const [showYolk, setShowYolk] = useState(false);
  const eggOpacity = useTransform(
    y,
    [0, 100, 120, 130, 140],
    [1, 1, 0, 1, 0]
  );

  const onAnimationComplete = () => {
    setTimeout(() => {
      setShowYolk(true);
    }, 100);
  };

  return (
    <motion.div
      style={{ y }}
      animate={{ y: 200 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        keyframes: [0, -40, 0, -30, 0],
      }}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.img
        src="/egg.png"
        alt="egg"
        style={{ opacity: eggOpacity, display: showYolk ? "none" : "block" }}
        className="w-12 h-12"
      />
      {showYolk && (
        <motion.img
          src="/yolk.png"
          alt="yolk"
          className="w-12 h-12 mb-4"
        />
      )}
    </motion.div>
  );
};

export default Egg;
