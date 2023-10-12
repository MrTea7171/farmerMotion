import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMyAnimationContext } from '../context/AminationStates'

const Cursor = () => {
    const { mouseAnimation } = useMyAnimationContext()
    const [largecircle, setlargecircle] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mousemove = (e) => {
            setlargecircle({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', mousemove)

        return () => {
            window.removeEventListener('mousemove', mousemove)
        }
    }, [])

    const variant = {
        hidden: {
            x: largecircle.x - 5,
            y: largecircle.y - 5,
        },
        visible: {
            x: largecircle.x,
            y: largecircle.y,
            transition: { type: 'tween' },
        },
        clientBlock: {
            x: largecircle.x - 5,
            y: largecircle.y - 5,
            width: '470px',
            height: '380px',
            borderRadius: '0px',
            mixBlendMode: 'normal',
            backgroundImage: `url(${mouseAnimation.currentImage})`,
        },
    }
    return (
        <motion.div
            animate={mouseAnimation.currentAnimation}
            initial={'hidden'}
            variants={variant}
            className="cursor"
        ></motion.div>
    )
}

export default Cursor
