import React, {Component} from "react";

class R27 extends Component{
    constructor(props){
        super(props);
        this.state ={
            stateString : 'react',
            stateArray : ['react', {react:'200'}]
        }
    }
    buttonClick= (type) =>{
        if(type=='string'){
            this.setState({stateString : 'react2'});
            this.forceUpdate();
        }else if(type=='array') {
            this.setState({stateArray : ['react2', {react:'200000'}]});
            this.forceUpdate();
        }
    }


    render(){
        console.log('render() 실행');
        console.log(this.state.stateString);
        console.log(this.state.stateArray);
        return (
            <div>
                <button onClick={e => this.buttonClick('string')}>문자열 변경</button>
                <button onClick={e => this.buttonClick('array')}>배열 변경</button>
                <h1>스테이트:{this.state.stateString}</h1>
                <h2>어레이:{this.state.stateArray[1]['react']} </h2>

            </div>
        )
    }
}

export default R27;