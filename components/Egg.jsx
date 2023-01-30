import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Egg = () => {
    const [isCracked, setIsCracked] = useState(false);

    return (
        <motion.div
            className={`egg ${isCracked ? 'cracked': ''}`}
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsCracked(true)}
        />
    )
};

export default Egg;
