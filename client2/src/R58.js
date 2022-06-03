import React, { Component } from "react";
import Swal from "sweetalert2";

class R58 extends Component{
    deleteAlert = (e) =>{
        Swal.fire({
            title : '정말 삭제?',
            icon : 'question',
            showCancelButton : true,
            confirmButtonColor : 'red',
            cancelButtonColor :  'blue',
            confirmButtonText : '가능',
            cancelButtonText : '이야'

        }).then((result) => {
            if(result.value){
                document.getElementById('deleteId').remove();
                console.log(result.value)
                Swal.fire(
                    'Deleteㅇ',
                    'sweetAlert2 삭제 완료',
                    'success'


                )
            }
        })
    }


    render(){
        return(
            <>
            <h1 id='deleteId'>sweetAlert2</h1>
            <button onClick={ e => this.deleteAlert()}>삭제</button>
            </>
        )
    }
}

export default R58;