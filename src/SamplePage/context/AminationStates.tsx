// StringContext.js
import React, { createContext, useState, useContext } from 'react'

// Create a context
const myAnimationContext = createContext({
    mouseAnimation: {
        currentAnimation: '',
        currentImage: '',
    },
    updateMouseAnimation: (newString) => {},
})

// Create a provider component
export function MyAnimationProvider({ children }) {
    const [mouseAnimation, setMouseAnimation] = useState({
        currentAnimation: 'visible',
        currentImage: '',
    })

    // You can create functions to update these states
    const updateMouseAnimation = (newString) => setMouseAnimation(newString)

    return (
        <myAnimationContext.Provider
            value={{
                mouseAnimation,
                updateMouseAnimation,
            }}
        >
            {children}
        </myAnimationContext.Provider>
    )
}

// Create a custom hook for using the context
export function useMyAnimationContext() {
    return useContext(myAnimationContext)
}
