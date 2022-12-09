import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from'./Componet/Navbar'
import Display from './Componet/Display';
import Butt from './Componet/Button';




const App = props => {
    document.body.style = 'background: grey';

    // let [result, setResult] = React.useState(0);
    let [cal, setCal] = React.useState([]);

    function add(value) {
        setCal(
            [
                ...cal,
                value
            ]
        )
    }

    return (
        <div>
            <Navbar />
            <div className='body col-lg-4'>
                <div className=' row'>

                    <div className='row'>
                        <Display output="cal"/>
                    </div>
                    
                    <div className='row'>
                        <Butt add={this.add}/>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default App;
