import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import report from './reportWebVitals'
import App from './component/App'
import { Routes } from 'react-router-dom';

import reactRouter1 from './component/R89'
import reactRouter2 from './component/R89_reactRouter2'


  // class App extends Component{
    //   render(){      
        //     }
        //   }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


// ReactDOM.render((
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
