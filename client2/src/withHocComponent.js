import React from "react";

export default function HocComponent(In, InName){
    return class Component extends React.Component{
        componentDidMount (){
            console.log('3. incomponent : ' + {InName})

        }
        render(){
            console.log('1. incomponent render')
            return (<In {...this.props}/>)
        }o
    }
}