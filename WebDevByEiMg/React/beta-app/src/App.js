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

const MyContext = React.createContext();

const App = props => {
    return (
        <MyContext.Provider value={"Hello React"} >
            <Header />
        </MyContext.Provider>
    )
}

const Header = props =>  <Title/>;

const Title = props => {
    return(
        <MyContext.Consumer >
            { value => <h1>{value}</h1>}
        </MyContext.Consumer>
    )
}





export default App;