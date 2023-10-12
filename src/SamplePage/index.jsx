import { useEffect, useRef } from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import './fonts/fonts.css'
import './index.css'
import Lenis from '@studio-freight/lenis'
import AboutSection from './components/AboutSection'
import { useScroll, useSpring, useTransform, motion } from 'framer-motion'
import WorksSection from './components/WorksSection'
import ProcessSection from './components/ProcessSection'
import ClientSection from './components/ClientSection'
import Cursor from './components/Cursor'
import { MyAnimationProvider } from './context/AminationStates'

const SamplePage = () => {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    })
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 15,
        mass: 0.5,
        damping: 5,
    })

    const backgroundColor = useTransform(
        smoothProgress,
        [0, 0.27, 0.3, 0.65, 0.7, 1],
        ['#0f0d0d', '#0f0d0d', '#ffffff', '#ffffff', '#0f0d0d', '#0f0d0d']
    )

    return (
        <MyAnimationProvider>
            <Cursor />
            <Navbar />
            <motion.div
                ref={targetRef}
                className="main"
                style={{ backgroundColor }}
            >
                <HeroSection />
                <AboutSection />
                <WorksSection />
                <ProcessSection />
                <ClientSection />
            </motion.div>{' '}
        </MyAnimationProvider>
    )
}

export default SamplePage
