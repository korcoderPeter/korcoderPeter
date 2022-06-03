import React, { Component } from "react";


class R69 extends Component{
    MouseOver(tag) {
        console.log('tag : ' + tag)
    }
    render(){
        return(
            <>
            <div onMouseOver={e => this.MouseOver('움직임 div')}>
                    <h3>div onMouseOver</h3>
                </div>
                <input type='text' onMouseOver={e => this.MouseOver('움직임 input')}></input>
                <select onMouseOver={e => this.MouseOver('움직임 select')}>
                    <option value='react'>react</option>
                    <option value='200'>200</option>
                </select>

                <div  onMouseOver={e => this.MouseOver('빅 div에서 움직임')}>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>
                    ㅋㅋㅋㅋㅋㅋㅋ<br/>

                    

                </div>

            </>
        )
    }
}

export default R69;