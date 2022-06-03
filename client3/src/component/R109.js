import React, { Component } from 'react'
import { response } from '../../../server';

class R109 extends Component{
    componentDidMount = async () =>{
        const res = await fetch('/user');
        const body = await res.text();
        console.log('body : '+body)
    }
    render(){
        return(
            <><h1>proxy Call Node Api</h1></>
        )
    }
}


export default R109