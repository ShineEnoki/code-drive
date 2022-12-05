
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from'./Componet/Navbar'
import Display from './Componet/Display';
import Butt from './Componet/Button';


const App = props => {
    document.body.style = 'background: grey';


    return (
        <div>
            <Navbar />
            <div className='body col-lg-4'>
                <div className=' row'>

                    <div className='row'>
                        <Display/>
                    </div>
                    
                    <div className='row'>
                        <Butt/>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default App;
