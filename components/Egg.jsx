import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const Egg = () => {
  const y = useMotionValue(0);
  const [showYolk, setShowYolk] = useState(false);
  const eggOpacity = useTransform(y, [0, 100], [1, 0]);

  return (
    <motion.div
      style={{ y }}
      animate={{ y: 100 }}
      transition={{ duration: 2 }}
      onAnimationComplete={() => setShowYolk(true)}
    >
      <motion.img
        src="/egg.png"
        alt="egg"
        style={{ opacity: eggOpacity }}
        className="w-12 h-12"
      />
      {showYolk && (
        <div style={{ y: 100 }}>
          <img src="/yolk.png" alt="yolk" className="w-12 h-12" />
        </div>
      )}
    </motion.div>
  );
};

export default Egg;
