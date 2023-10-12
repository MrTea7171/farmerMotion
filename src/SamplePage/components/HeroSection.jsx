import {
    MotionConfig,
    circInOut,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import { motion } from 'framer-motion'
import Video from '../assets/duo-video.mp4'
import { useRef } from 'react'
const HeroSection = () => {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    })
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 15,
        mass: 0.5,
        damping: 5,
    })

    const messageOne = useTransform(smoothProgress, [0, 1], ['-4vw', '0vw'], {
        ease: circInOut,
    })
    const messageTwo = useTransform(smoothProgress, [0, 1], ['4vw', '0vw'])
    const myWidth = useTransform(smoothProgress, [0, 1], ['60%', '90%'])

    return (
        <MotionConfig transition={{ duration: 1, ease: 'easeInOut' }}>
            <motion.div id="hero" className="page">
                <motion.div ref={targetRef} id="hero-message">
                    <motion.h2
                        id="hero--message--one"
                        style={{
                            x: messageOne,
                        }}
                    >
                        Digitally crafted
                    </motion.h2>
                    <motion.h2
                        id="hero--message--two"
                        style={{ x: messageTwo }}
                    >
                        brand experiences
                    </motion.h2>
                </motion.div>
                <div id="hero-video">
                    <motion.video
                        autoPlay
                        muted
                        loop
                        src={Video}
                        style={{ width: myWidth }}
                    ></motion.video>
                </div>
            </motion.div>
        </MotionConfig>
    )
}

export default HeroSection
