// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import {connect} from 'react-redux'
import R83 from './R83'

class App extends Component{
  render(){
    return (
      <div>
        <h1>Start react 200</h1>
        <span>{this.props.str}</span>
        <R83 AppProp='200'></R83>
      </div>
    );
    
    
  }
}
let mapStateToProp = (state, props) =>{
  console.log('props from indes.js : ' + props.indexProp)
  return {
    str : state.data.str,
  };
};

App = connect(mapStateToProp, null)(App);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }


export default App;