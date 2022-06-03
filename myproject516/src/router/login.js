import React, { Component } from "react";


class login extends Component{
    render(){
        return(
            <div>
                <form>
                <input placeholder="아이디"></input>
                <input placeholder="비밀번호"></input>
                <button>로그인</button>
                </form>
            </div>
        )
    }
}

export default login