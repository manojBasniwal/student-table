import React, { useEffect } from 'react'
import "./clipboard.css"

function Clipboard({ text, handleClose }) {

    
    useEffect(()=>{
        setTimeout(() => {
               handleClose()
             }, 2000);
        
    }, [])
    
    return (
        <div className="clipboard-section">
            <p className="clipboard-heading">{text}</p>
            <div className="animation"></div>
        </div>
    )
}

export default Clipboard
