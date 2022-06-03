import React, { Component } from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import ReactRouter1 from './R89'
import ReactRouter2 from './R89_reactRouter2'
import R94 from '../R94';
import R95 from '../R95';
import Axios1 from './axios1'
// import R109 from './R109';
// css
import '../css/css.css';
// //header
// import HeaderAdmin from './Header/Header admin';
// //footer
import Footer from './Footer/footer';
//login
import LoginForm from './LoginForm'
// import Recharts from './chart'
import R110 from './Footer/R110';
import R111 from './R111';



function App() {
      return (
       
        <div className="App">
          
          <table id='HeaderTable'>
            <tbody>

            <tr>
              <th align='center'>Header Area
              
              </th>
            </tr>
            </tbody>
          </table>
          
          <header/>



            <table id='useTable'>
            <tbody>

              <tr>
                <td>
                  <BrowserRouter>
                    <Routes>
                      <Route  path='/login' element={<LoginForm />} />
                      <Route  path='/throttle' element={<R95 />} />
                      <Route  path='/debounce' element={<R94 />} />
                      <Route  path='/' element={<ReactRouter1 />} />
                       <Route  path='/reactRouter2' element={<ReactRouter2 />} />
                       <Route path='/r110' element={<R110 />} />
                       <Route path='/r111' element={<R111 />} />
                       {/* <Route path='/chart' element={<Recharts />} /> */}
                       {/* <Route path='/proxy' element={<R109 />} /> */}

                    </Routes>
                  </BrowserRouter>
                </td>
              </tr>
            </tbody>
            </table>  
            <BrowserRouter>
              <Routes>

                      <Route path='/api' element={<Axios1/> } />
              </Routes>
            </BrowserRouter>



          <Footer/>
      </div>
        );
        
      }
export default App;
