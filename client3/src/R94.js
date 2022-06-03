import { debounce } from "lodash";
import React, { Component } from "react";


class R94 extends Component{
    debounceFunc = debounce( ( ) => {
        console.log('debounce API Call');

    }, 1000) ;
    render(){
        return(
            <>
            <h2>검색어 입력</h2>
            <input type='text' onChange={this.debounceFunc}></input>
            </>
        )
    }
}

export default R94