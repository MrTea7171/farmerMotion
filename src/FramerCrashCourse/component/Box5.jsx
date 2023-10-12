import { motion, useAnimation } from 'framer-motion'

const Box5 = () => {
    const controller = useAnimation()
    const myVariant = {
        right: {
            x: 1000,
            transition: {
                type: 'spring',
                stiffness: 20,
                damping: 5,
            },
        },
        left: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 20,
                damping: 5,
            },
        },
        circle: {
            borderRadius: '50%',
            transition: {
                type: 'spring',
                stiffness: 20,
                damping: 5,
            },
        },
        square: {
            borderRadius: '0%',
            transition: {
                type: 'spring',
                stiffness: 20,
                damping: 5,
            },
        },
    }
    return (
        <div className="box-container">
            <button
                onClick={() => {
                    controller.stop()
                }}
            >
                Stop
            </button>
            <button
                onClick={() => {
                    controller.start(myVariant.right)
                }}
            >
                Move Right
            </button>
            <button
                onClick={() => {
                    controller.start(myVariant.left)
                }}
            >
                Move Left
            </button>
            <button
                onClick={() => {
                    controller.start(myVariant.circle)
                }}
            >
                Circle
            </button>
            <button
                onClick={() => {
                    controller.start(myVariant.square)
                }}
            >
                Square
            </button>

            <motion.div
                className="box"
                animate={controller}
                variants={myVariant}
            ></motion.div>
        </div>
    )
}

export default Box5
