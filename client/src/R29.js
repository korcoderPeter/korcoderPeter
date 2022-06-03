import React, { Component }  from "react";
import { shallowEqualArrays } from "shallow-equal";


class R29 extends Component{
    constructor(props){
        super(props);
        this.state ={
            StateString:'react'
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }
    componentDidMount(){
        const object = {react : '200'};
        const array = ['리액트', object];
        const array2 = ['리액트', object];
        const array3 = ['리액트2', {react : '200'}];

        console.log('shallowEqualArrays(array, array2) :'+shallowEqualArrays(array, array2));
        console.log('shallowEqualArrays(array2, array3) :'+shallowEqualArrays(array2, array3));
        this.setState({StateString : 'react'})

    }



    render(){
        console.log('render () 실행')
        return (
            <div></div>
        )
    }
}


export default R29;