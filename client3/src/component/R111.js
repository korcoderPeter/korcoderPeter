
import React, { Component } from "react";

const axios = require('axios')

class R111 extends Component{
    componentDidMount(){
        axios.post('/user', {

        }).then( response => {
            console.log('response.data.message : '+ response.data.message);
        })
    }
    render(){
        return (
            <>
            <h1>Call Node Api Post</h1>
            </>
        )
    }
}

export default R111;