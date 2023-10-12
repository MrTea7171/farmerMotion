import { motion } from 'framer-motion'

const Box2 = () => {
    return (
        <div className="box-container">
            <motion.div
                className="box"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                whileHover={{
                    scale: 1.2,
                }}
                whileTap={{
                    scale: 0.8,
                }}
                whileDrag={{
                    scale: 1.2,
                    backgroundColor: 'red',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 60,
                    damping: 4,
                }}
            ></motion.div>
        </div>
    )
}

export default Box2
