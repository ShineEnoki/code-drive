import React from 'react';

class Toolbar extends React.Component{
    render(){
        return(
            <div style={{background: "cyan", padding: 20}}>
                {this.props.children}
            </div>
        )
    }
}

export default Toolbar;