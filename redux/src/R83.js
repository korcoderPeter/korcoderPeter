import React, { Component } from "react";
import { connect } from "react-redux";
import {add} from './actions'

class R83 extends Component{
    render(){
        return(
            <input value='Add200' type='button' onClick={this.props.addString}/>
        )
    }
    
}
let mapStateToProp = (dispatch, props) => {
    console.log('Props from App.js : ' + props.AppProp)
    return {
        addString: () => dispatch(add())
    };
};

R83 = connect(null, mapStateToProp)(R83);


export default R83;