import React, { Component } from "react";

class R73 extends Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();

        

    }
    refFocus =(e)=>{
        this.inputRef.current.focus();
    }

    javascript(){
        document.getElementById('id').focus();
    }

    render(){
        return(
            <>
            <input id='id' type='text' ref={this.inputRef}/>
            <input type='button' value='ref focus' onClick={this.refFocus}/>
            <input type='button' value='javascript focus' onClick={this.javascript}/>

            </>
        )
    }
}

export default R73;
