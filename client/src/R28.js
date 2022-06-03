import React, {PureComponent} from "react";

class R28 extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            StateString : '리액트',
            StateArray : ['어레이1', {array : '어레이1'}]
        }
    }
    buttonClick = (type) => {
        if(type === 'string'){
            this.setState({StateString:'리액트2'});
        }else {
            this.setState({StateArray: ['어레이2', {array:'어레이2'}]});
        }
    }

    render(){
        console.log('render() 실행')

        return(
            <div>
                <button onClick={e => this.buttonClick('string')}>스트링 리액트</button>
                <button onClick={e => this.buttonClick('array')}>어레이 리액트</button>
                <h1> {this.state.StateString} </h1>
                <h2> {this.state.StateArray[1]['array']}</h2>

            </div>
        )
    }
}

export default R28;