import React from 'react';
// import Toolbar from './Toolbar';
// import './Toolbar.css'

// class Item extends React.Component{
//     render(){
//         return(
//             <li>
//                 {this.props.name},
//                 ${this.props.price}
//             </li>
//         )
//     }
// }


// class App extends React.Component{

//     state = {
//         items: [
//             {id: 1, name: "Acer", price: 350},
//             {id: 2, name: "Asus", price: 450}
//         ]
//     }

    

//     add = (name, price) => {
//         let id = this.state.items.length + 1;
        

//         this.setState({
//             items: [
//                 ...this.state.items,
//                 {id, name, price}
//             ]
//         })
//     }

//     render(){
//         return(
//             <div className='toolbar'>
                
//                 <ul style={{color: "white",backgroundColor: "gray"}}>
//                     {this.state.items.map(i =>{
//                         return (
//                                 <Item 
//                                     key = {i.id}
//                                     name = {i.name}
//                                     price = {i.price}
//                                     />
                                
//                             )
//                         })}
//                 </ul>
                
//                 <AddForm add={this.add}/>
                
//             </div>
//         )
//     }
// }

// class AddForm extends React.Component{
//     nameRef = React.createRef();
//     priceRef = React.createRef();

//     add = () => {
//         let name = this.nameRef.current.value;
//         let price = this.priceRef.current.value;

//         this.props.add(name, price);
//     }

//     render(){
//         return (
//             <div>
//                 <input type="text" ref={this.nameRef}></input><br/>
//                 <input type="number" ref={this.priceRef}></input><br/>
//                 <button onClick={this.add}>Add</button>
//             </div>
//         )
//     }
// }

// export default App;



// const Item = ({name, price}) => (
//     <li>
//         {name},${price}
//     </li>
// )

// const App = props => {
//     let [state,setState] = React.useState([
//         {id: 1, name: "Apple", price: 500},
//         {id: 2, name: "sakura", price: 0}
//     ]);

//     let nameRef = React.createRef();
//     let priceRef = React.createRef();

//     let add = () => {
//         let id = state.length + 1;
//         let name = nameRef.current.value;
//         let price = priceRef.current.value;

//         setState(
//             [
//                 ...state,
//                 {id, name, price}
//             ]
//         )
//     }
//     return ( 
//         <div>
//             <ul>
//                 {state.map(i => 
//                     <Item 
//                         name = {i.name}
//                         price = {i.price}
//                     />
//                 )}
//             </ul>
//             <input type="text" ref={nameRef}></input>
//             <input type="text" ref={priceRef}></input>
//             <button onClick={add}>Add</button>
//         </div>
//     )
// }
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;




