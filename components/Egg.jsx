import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Egg = () => {
  const [isCracked, setIsCracked] = useState(false);

  useEffect(() => {
    setIsCracked(true);
  }, []);

  return (
    <motion.div
      className="egg"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <motion.div
        className="egg-shell"
        animate={{
          y: isCracked ? 10 : 0,
          rotate: isCracked ? 10 : 0,
        }}
        transition={{ duration: 0.5 }}
      />
      {isCracked && (
        <motion.div
          className="egg-yolk"
          animate={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

export default Egg;
