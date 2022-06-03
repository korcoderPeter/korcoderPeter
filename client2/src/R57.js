import React, { Component } from "react";
import Swal from "sweetalert2";

class R57 extends Component{
    saveAlert = (flag, positionFlag, e) =>{
        Swal.fire({
            position : positionFlag,
            icon : 'success',
            title : flag + '됐습니다',
            showConfirmButton : false,
            timer : 2000
        })
    }


    render(){
        return(
            <>
            <h1>sweetalert2</h1>
            <button onClick={e => this.saveAlert('저장', 'center')}>저장</button>
            <button onClick={e => this.saveAlert('취소', 'bottom-end')}>수정</button>
            </>
        )
    }
}

export default R57;