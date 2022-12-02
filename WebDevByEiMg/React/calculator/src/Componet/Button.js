import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

const Butt = props => {
    return (
        <div>
            <div className="row">
                <button className="col-3 btn btn-outline-warning">7</button>
                <button className="col-3">8</button>
                <button className="col-3">9</button>
                <button className="col-3">AC</button>
            </div>

            <div className="row">
                <button className="col-3">4</button>
                <button className="col-3">5</button>
                <button className="col-3">6</button>
                <button className="col-3">+</button>
            </div>

            <div className="row">
                <button className="col-3">1</button>
                <button className="col-3">2</button>
                <button className="col-3">3</button>
                <button className="col-3">-</button>
            </div>

            <div className="row">
                <button className="col-3">0</button>
                <button className="col-3">.</button>
                <button className="col-3">*</button>
                <button className="col-3">/</button>
            </div>

            <div className="row">
                <button className="col-3">1</button>
                <button className="col-3">2</button>
                <button className="col-3">3</button>
                <button className="col-3">4</button>
            </div>
            
        </div>
    )
}


export default Butt;