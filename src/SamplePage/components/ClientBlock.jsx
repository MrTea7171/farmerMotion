import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { useMyAnimationContext } from '../context/AminationStates'

const ClientBlock = ({ clientName, clientYear, clientWork }) => {
    const ref = useRef()
    const { updateMouseAnimation } = useMyAnimationContext()

    useEffect(() => {
        const client = ref.current
        const handleHover = () => {
            updateMouseAnimation({
                currentImage: clientWork,
                currentAnimation: 'clientBlock',
            })
        }

        const handleLeave = () => {
            updateMouseAnimation({
                currentImage: '',
                currentAnimation: 'visible',
            })
        }

        client.addEventListener('mouseenter', handleHover)
        client.addEventListener('mouseleave', handleLeave)

        return () => {
            client.removeEventListener('mouseenter', handleHover)
            client.removeEventListener('mouseleave', handleLeave)
        }
    }, [updateMouseAnimation, clientWork])
    return (
        <div ref={ref} className="clients--box" data-image={clientWork}>
            <h3>{clientName}</h3>
            <h4>{clientYear}</h4>
        </div>
    )
}

ClientBlock.propTypes = {
    clientName: PropTypes.string.isRequired,
    clientYear: PropTypes.number.isRequired,
    clientWork: PropTypes.string.isRequired,
}

export default ClientBlock
