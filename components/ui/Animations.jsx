import { motion, useMotionValue, useTransform } from 'framer-motion';

export const EggYolk = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.3 }}
    >
      <img
        src="/yolk.png"
        alt=""
        className="w-10 h-auto"
      />
    </motion.div>
  )
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
      className="w-14 h-14"
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
