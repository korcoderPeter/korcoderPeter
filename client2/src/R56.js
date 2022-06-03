import React, { Component } from "react";
import Swal from "sweetalert2";

class R56 extends Component{
    componentDidMount(){
        Swal.fire('1. sweetalert')
        alert('2. alert')
        Swal.fire('1. sweet').then(result =>{
            alert('2. result.value : '+result.value)
        })
    }
    render(){
        return(
            <h1>sweetalert2</h1>

            
        )
    }
}

export default R56;