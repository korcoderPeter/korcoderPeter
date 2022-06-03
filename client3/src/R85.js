import React, { Component } from "react";
import cookie from "react-cookies";



class R85 extends Component{
    componentDidMount(){
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid', "react200",{
            path : '/',

            expires,
        });
    }
    // setTimeout(() => {
    //     cookie.remove('userid',{
    //         path:'/'
    //     })
    // }, 5000); 
    // setTimeout(() => {
    //     alert(cookie.load('userid'))
    // }, 10000);
    
    render(){
        return (
            <><h3>react-cookies save</h3></>
        )
    }

}
export default R85;