import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const EggYolk = () => {
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
        alt=""
        style={{ opacity: eggOpacity, display: showYolk ? "none" : "block" }}
        className="w-12 h-12"
      />
      {showYolk && (
        <motion.img
          src="/yolk.png"
          alt=""
          className="w-12 h-12 mb-4"
        />
      )}
    </motion.div>
  );
};

export const HappyEgg = () => {
  const y = useMotionValue(0);
  const eggOpacity = useTransform(
    y,
    [0, 100, 120, 130, 140],
    [1, 1, 0, 1, 0]
  );

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
    >
      <motion.img
        src="/happy-egg.png"
        alt=""
        style={{ opacity: eggOpacity }}
        className="w-12 h-12"
      />
    </motion.div>
  );
};
