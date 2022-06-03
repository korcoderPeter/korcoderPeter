import React, {Component} from "react";

class R25 extends Component {
    constructor(props){
        super(props);
        this.state ={
            reactString: 'react',

        }
    }
    StateChange = (flag) => {
        if (flag == 'direct') this.state.reactString = "리액트1";
        if (flag == 'setstate') this.setState({reactString : '리액트2'})
    }
    render(){
        return (
            <div style={{padding:'0px'}}>
                <button onClick={(e) => this.StateChange('direct', e)}>
                    state 직접변경
                </button>
                <button onClick={(e) => this.StateChange('setstate', e)}>
                    setstate 직접변경
                </button> <br/>
                [state 변경하기] reactString : {this.state.reactString}


            </div>
        )
    }
}


export default R25;