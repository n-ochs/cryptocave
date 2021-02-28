import { useLayoutEffect, useState } from 'react'


function useWindowPosition(id, par) {
    const [animation, setAnimation] = useState(false)

    useLayoutEffect(() => {
        function updatePosition() {

            const offsetSetHeight = window.document.getElementById(id).offsetHeight

            if (window.pageYOffset > offsetSetHeight * .7) {
                setAnimation(true)
            }

        }
        window.addEventListener('scroll', updatePosition)
        updatePosition()
        return () => window.removeEventListener('scroll', updatePosition)
    }, [id])
    return animation
}

export default useWindowPosition

