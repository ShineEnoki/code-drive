import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';


const Display = props => {
    return (
        <div className='display-item row'>
            <div className="text-end">Output 1</div>
            <div className="text-end">Output 2</div>
        </div>
    )
}

export default Display;