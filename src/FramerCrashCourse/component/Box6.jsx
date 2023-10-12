import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Box6 = () => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div
            className="box-container "
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <AnimatePresence mode="popLayout">
                {isVisible && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="box"
                    ></motion.div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => {
                    setIsVisible((prev) => {
                        return !prev
                    })
                }}
                initial={{ x: 0 }}
                layout
            >
                Hide / Show
            </motion.button>
        </div>
    )
}

export default Box6
