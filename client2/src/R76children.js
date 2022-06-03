import React, { Component } from "react";
import {Consumer} from './R76'


class R76children extends React.Component{
    render(){
        return(
            <>
            <Consumer>
                {contextValue =>
                    <button onClick={e => contextValue.setStateFunc('react200')}>
                        {contextValue.name}_button
                    </button>
                }
            
                
            
            </Consumer>
            </>
        )
    }
}


export default R76children;