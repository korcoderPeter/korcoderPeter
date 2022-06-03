import React, { Component } from "react";


class R68 extends Component{
    mousemove(tag) {
        console.log('tag : ' + tag);
    }


    render(){
        return(
            <>
                <div onMouseMove={e => this.mousemove('움직임 div')}>
                    <h3>div onMouseMove</h3>
                </div>
                <input type='text' onMouseMove={e => this.mousemove('움직임 input')}></input>
                <select onMouseMove={e => this.mousemove('움직임 select')}>
                    <option value='react'>react</option>
                    <option value='200'>200</option>
                </select>

                <div  onMouseMove={e => this.mousemove('빅 div에서 움직임')}>
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


export default R68;