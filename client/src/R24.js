import React, {Component} from "react";

class R24 extends Component{
    constructor(props){
        super(props);
        this.state = {
            reactString2 : this.props.reactString,
            reactNumber : 200,
        }
    }


    
    render(){
        return (
            <div style={{padding:'0px'}}>
                {this.state.reactString2} {this.state.reactNumber}

            </div>
        )
    }

}


export default R24;

