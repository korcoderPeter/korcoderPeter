import React, { Component } from "react";


class R74 extends Component{

    plusNumOrString(c, d){
        return c + d
    }
    plusFunc1(a){
        return function(b){
            return this.plusNumOrString(a, b)
        }.bind(this)
    }
    plusFunc2 = a => b => this.plusNumOrString(a,b)

    plusFunc(a){
        return this.plusFunc2(a)(200)
    }

    render(){
        return(
            <>
            <input type='button' value='NumberPlus' onClick={ e => alert(this.plusFunc(100))}></input>
            <input type='button' value='stringPlus' onClick={ e => alert(this.plusFunc('react'))}></input>
            </>
        )
    }
}


export default R74;