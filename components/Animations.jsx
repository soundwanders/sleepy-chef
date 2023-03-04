import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const EggYolk = () => {
  const [showYolk, setShowYolk] = useState(false);
  const [eggFinalY, setEggFinalY] = useState(null);

  const onDragEnd = (event, info) => {
    setEggFinalY(info.point.y);
  };

  const y = useMotionValue(-200);

  const yolkInitialY = eggFinalY !== null ? eggFinalY : y.get();

  const onAnimationComplete = () => {
    setShowYolk(true);
  };

  return (
    <>
      <motion.div
        drag="y"
        dragConstraints={{ top: -500, bottom: 0 }}
        style={{ y }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99],
          keyframes: [0, -200, 0, -90, 0],
        }}
        
        onAnimationComplete={onAnimationComplete}
        onDragEnd={onDragEnd}
      >
        <motion.img
          src="/egg.png"
          alt=""
          style={{ display: showYolk ? "none" : "block" }}
          className="w-12 h-12"
        />
      </motion.div>
      {showYolk && (
        <motion.img
          src="/yolk.png"
          alt=""
          style={{ y: yolkInitialY }}
          className="w-12 h-12 mb-4"
        />
      )}
    </>
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
      className="w-14 h-14 mx-auto"
      style={{ y }}
      animate={{ y: 200 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        keyframes: [0, -60, 0, -30, 0],
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <motion.img
        src="/happy-egg.png"
        alt=""
        style={{ opacity: eggOpacity }}
        className="w-14 h-14"
      />
    </motion.div>
  );
};
