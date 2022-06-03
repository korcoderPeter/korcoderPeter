import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Pagination from './R50'
import Popovers from './R51'
//import Progress from './R52'
import Spinner from './R53'
import Table from './R54'
import Tab from './R55'
import Sweet from './R56'
import SweetPosition from './R57'
import Confirm from './R58'
import Click from './R66'
import ReactChange from './R67'
import Mousemove from './R68'
import Mouseover from './R69'
import Submit from './R72'
import ReactRef from './R73'
import Currying from './R74'
import Hoc from './R75'
import Contextapi from './R76'

import redux80 from './R80'
import { Component } from 'react';
// function App() {
//   return (
//     <div className="App">
//       <div id='MainDiv'>
//       <h1>Hello Client2!</h1>
//       <h2>안녕 리액트200-50 시작</h2>
//       </div>
//       <span>
//       <Contextapi/>
//       </span>

//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <div><h1>start 200!</h1>
      <span> {this.props.store.getState().data.str}</span><br/>
      <redux80 store={this.props.store}/>
      </div>
    )
  }
}



export default App;
