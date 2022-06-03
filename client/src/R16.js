import $ from "jquery";
import React, {Component} from "react";


class R16 extends Component{
    input_alert =(e)=>{
        var input_val = $("#inputId").val();
        if(input_val == ""){
            return null;
        }else {
            alert(input_val);
            
        }
    
    }
    render(){
        return (
            <div>
                <h1>제이쿼리</h1>
                <input id='inputId' name='inputName'></input>
                <button id="buttonId" onClick={e => this.input_alert(e)}>제이쿼리</button>
            </div>
        )
    }



}

export default R16;