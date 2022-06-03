import React, { Component } from "react";
import { Spinner } from "reactstrap";

class R53 extends Component{
    render(){
        return (
            <>
            <Spinner color="secondary" />
            <Spinner color="success" />
            <Spinner color="dark" type='grow' />
            <Spinner color="info" type='grow' />
            <Spinner color="primary" size='sm' />
            <Spinner color="dark"  style={{width : '10rem', height : '5rem'}}/>
            <Spinner color="secondary"  style={{width : '10rem', height : '10rem'}}/>
            <Spinner color="primary"  style={{width : '10rem', height : '5rem'}}/>
            </>
        )
    }
}

export default R53;