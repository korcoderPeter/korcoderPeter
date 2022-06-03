import React, { Component } from "react";
import Children from './R76children'

const { Provider, Consumer} = React.createContext();
export {Consumer}


class R76 extends React.Component{
    constructor(props){
        super(props);
        this.setStateFunc = this.setStateFunc.bind(this)

    }

    setStateFunc(value){
        this.setState({name : value})
    }

    render(){
        const context = {
            ...this.state,
            setStateFunc : this.setStateFunc
        }

        return(
            <>
            <Provider value={context}>
                <Children />
            </Provider>
            </>
        )
    }
}


export default R76;