import React from 'react'

const Popup = (props) => {
    return (props.trigger) ? (
        <div>
            <div>
                <button onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : ''

}

export default Popup
