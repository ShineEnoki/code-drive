import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';


const Display = props => {
    return (
        <div className='display-item row rounded'>
            <div className="text-end mb-1 mt-1">Output 1</div>
            <div className="text-end mb-1">Output 2</div>
        </div>
    )
}

export default Display;