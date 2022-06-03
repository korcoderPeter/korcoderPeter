import React, { Component } from "react";
import {Consumer } from './R76'


class R76children2 extends Component{
    render(){
        return(
            <>
            
                <Consumer>
                    {contextValue => <h1>{`contextValue : ${contextValue}`}</h1> }
                </Consumer>

            
            </>
        )
    }
}


export default R76children2;