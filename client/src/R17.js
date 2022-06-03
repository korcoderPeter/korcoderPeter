import React, {Component} from "react";
import datatype from 'prop-types';


class R17 extends Component{
    render(){
        let {String, Number, Boolean, array, ObjectJson, Function } =
        this.props
        return (
            <div style={{padding:'0px'}}>
                <p>String {String}</p>

                <p>Number {Number} </p>
                <p>Boolean {Boolean} </p>
                <p>array {array} </p>
                <p>ObjectJson {ObjectJson}</p>
                <p>Function {Function}</p>

            </div>
        )
    }
}
R17.propTypes = {
    String : datatype.string,
    Number : datatype.number,
    Boolean : datatype.bool,
    array : datatype.array,
    ObjectJson : datatype.object,
    Function : datatype.func,

}

export default R17;