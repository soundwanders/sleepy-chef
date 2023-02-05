import { motion } from "framer-motion";

const Egg = () => (
  <motion.div
    className="egg"
    initial={{ translateY: "-100%" }}
    animate={{ translateY: 0 }}
    transition={{ duration: 1, ease: "easeIn" }}
  >
    <motion.div
      className="cracked"
      animate={{ rotate: 90 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </motion.div>
);

export default Egg;
