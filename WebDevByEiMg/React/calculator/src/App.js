
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Display from './Componet/Display';
import Butt from './Componet/Button';

const App = props => {
    return (
        <div className='body'>
            <div className='content-center'>
                <div className='container row'>

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
