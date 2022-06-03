import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginForm extends Component{
render(){

    
    return(
        <section className="main">
            <div className="m_login">
                <h3><span>
                    <img src={require('../img/vegeta.gif')}></img>
                    </span></h3>
                <form>
                    <div className="in_ty1">
                        <span> <img src={require('../img/Cherry64.png')} alt=''></img><br/> </span>
                        <input type='text' id='email_val' name="email" placeholder="이메일"></input>
                    </div>
                    <div className="in_ty1">
                        <span className="ic_2">
                            <img src={require('../img/body.png')} alt=""/> <br/>
                            <input type='password' placeholder="비밀번호"></input>
                        </span>
                    </div>
                <ul>
                    <li><Link to={'/register_check'}>회원가입</Link></li>
                    <li><a href='#n'>비밀번호 재설정</a></li>
                </ul>
                <button type='submit'>로그인</button>
                </form>
            </div>
        </section>
        )
    }
    
}

export default LoginForm;