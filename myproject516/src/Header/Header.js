import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Header extends Component{
    render(){
        return(
            <>

            <span className='HeaderMenu'>HeaderMenu</span>
            <div className='HeaderHome'>Header</div>
                
            
            <Link to={'/login.com'}>login</Link>
            </>
        )
    }
}


export default Header;