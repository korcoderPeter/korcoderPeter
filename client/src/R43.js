import React, { Component } from "react";
import { Button, Fade } from "reactstrap";

class R43 extends Component{
    constructor(props){
        super(props);
        this.state = {
            fadeInOut : true
        }
    }
    toggle = (e) =>{
        this.setState({fadeInOut : !this.state.fadeInOut})
    }




    render(){
        return(
            <div>
                <Button color="success" onMouseOver={this.toggle}>
                    fadeButton
                </Button>

                <Fade in={this.state.fadeInOut} tag = 'h1'>
                    레이드 명령어 숨기고 보이게 하고
                </Fade>
            </div>
        )
    }
}


export default R43;