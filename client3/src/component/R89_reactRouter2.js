import React, { Component } from "react";
import { Link } from "react-router-dom";

class R89_reactRouter2 extends Component{
    render(){
        return(
            <>

            <h1>path = '/reactRouter2'</h1>
            <h2>R89_reactRouter2</h2>
            <Link to={'/'}>맨처음</Link> <br/>
            <Link to={'/login'}>로그인</Link>
            </>
        )
    }
}

export default R89_reactRouter2;
