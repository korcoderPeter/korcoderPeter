import React, { Component } from "react";
import { Link } from "react-router-dom";

class R89 extends Component{
    render(){
        return(
            <>

            <h1>path = '/'</h1>
            <h2>R89</h2>
            <Link to={'/reactRouter2'}>링크기능2</Link><br/>
            <Link to={'/login'}>로그인</Link>
            </>
        )
    }
}

// function R89(props){
//     return (
//         <>
//         <h1>R89</h1>
//         </>
//     );
//}


export default R89;
