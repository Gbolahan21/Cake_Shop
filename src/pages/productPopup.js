import React from 'react';
import "./Popup.css";

function productPopup(props) {
    return (props.trigger) ? (
        <div className="popup">
           <div className="popup-inner">
                
                { props.children }
            </div> 
        </div>
    ) : "";
}

export default productPopup;
