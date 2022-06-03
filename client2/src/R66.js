import React, { Component } from "react";


class R66 extends Component{
    buttonClick = (param) =>{
        if(typeof param != 'string') param = 'click a'
        console.log('param' +param);
    }
    render(){
        return(
            <><button onClick={e => this.buttonClick('click button')}> 클릭 버튼</button>
            <div onClick={e => this.buttonClick('click div')}>클릭 디브</div>
            <a href='javascript:' onClick={this.buttonClick}>클릭 a</a>
            </>
        )
    }
}

export default R66