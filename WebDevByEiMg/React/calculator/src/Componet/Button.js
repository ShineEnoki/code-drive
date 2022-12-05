import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';

const Butt = props => {
    return (
        <div>
            <div className="row">
                <button className="col-3 btn btn-outline-info">(</button>
                <button className="col-3 btn btn-outline-info">)</button>
                <button className="col-3 btn btn-outline-info">%</button>
                <button className="col-3 btn btn-dark">AC</button>
            </div>

            <div className="row">
                <button className="col-3 btn btn-outline-warning">7</button>
                <button className="col-3 btn btn-outline-warning">8</button>
                <button className="col-3 btn btn-outline-warning">9</button>
                <button className="col-3 btn btn-outline-info">/</button>
            </div>

            <div className="row">
                <button className="col-3 btn btn-outline-warning">4</button>
                <button className="col-3 btn btn-outline-warning">5</button>
                <button className="col-3 btn btn-outline-warning">6</button>
                <button className="col-3 btn btn-outline-info">x</button>
            </div>

            <div className="row">
                <button className="col-3 btn btn-outline-warning">1</button>
                <button className="col-3 btn btn-outline-warning">2</button>
                <button className="col-3 btn btn-outline-warning">3</button>
                <button className="col-3 btn btn-outline-info">-</button>
            </div>

            <div className="row">
                <button className="col-3 btn btn-outline-warning">0</button>
                <button className="col-3 btn btn-outline-warning">.</button>
                <button className="col-3 btn btn-light">=</button>
                <button className="col-3 btn btn-outline-info">+</button>
            </div>
            
        </div>
    )
}


export default Butt;