import { motion } from 'framer-motion'
import { useState } from 'react'

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false)
    return (
        <div className="box-container">
            <motion.div
                className="box"
                animate={{
                    x: isAnimating ? 1000 : 0,
                    rotate: isAnimating ? 360 : 0,
                    opacity: isAnimating ? 0.4 : 1,
                }}
                initial={{ opacity: 0.4 }}
                transition={{
                    type: 'spring',
                    stiffness: 60,
                    damping: 10,
                }}
                onClick={() => {
                    setIsAnimating(!isAnimating)
                }}
            ></motion.div>
        </div>
    )
}

export default Box1
