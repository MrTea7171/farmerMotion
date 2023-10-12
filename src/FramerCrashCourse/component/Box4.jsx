import { motion } from 'framer-motion'

const Box4 = () => {
    return (
        <div className="box-container">
            <motion.div
                className="box"
                animate={{
                    scale: [1, 1.5, 1.5, 1, 1],
                    borderRadius: [0, 0, '50%', '50%', '20%'],
                    rotate: [0, 180, 360, 180, 0],
                    backgroundColor: [
                        '#ff0000',
                        '#00ff00',
                        '#0000ff',
                        '#00ff00',
                        '#ff0000',
                    ],
                }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 2,
                    repeatType: 'reverse',
                    duration: 3,
                }}
            ></motion.div>
        </div>
    )
}

export default Box4
