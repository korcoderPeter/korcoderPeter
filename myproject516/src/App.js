
import './App.css';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 해더 n 풋터
import Header from './Header/Header'
import Footer from './Footer/Footer';
// router
import Login from './router/login'
import Main from './router/main';

function App() {
  return (
    <div className="App">
      <Header/>

      
      <Routes>

      <Route path='/' component={<Main/>}/>
      <Route path='/login.com' component={<Login/>}/>

      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
