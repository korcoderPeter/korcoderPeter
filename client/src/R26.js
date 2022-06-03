import React, {Component} from "react";


class R26 extends Component {
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }

    }
    StateChange = (flag) => {
        if(flag == 'react'){this.state.StateString = 'react2'
        this.forceUpdate();}else 
        if(flag == 'direct'){
        this.setState({StateString:'리액트'});
            
        }
    }


    render(){
        return (
            <div style={{padding:'0px'}}>
                <button onClick={(e) => this.StateChange('direct', e)}> 
                state 직접 변경</button> <br/>
                <button onClick={(e) => this.StateChange('react', e)}> 
                state 직접 변경</button> <br/>
                [state 변경하기] stateString : {this.state.StateString}

            </div>
        )
    }
}

export default R26;