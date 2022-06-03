import { throttle } from "lodash";
import React, { Component } from "react";

// throttleFunc = throttle( () => {
//     console.log('Throttle API Call');
// }, 1000)
// <h3>검색어 입력</h3>
// <input type='text' onChange={this.throttleFunc}></input>

class R95 extends Component{
    render(){
        return (
            <>
            <table>
                <thead>
                    <tr>
                        <th>Row</th>
                        <th>일자</th>
                        <th>시간</th>
                        <th>연령대</th>
                        <th>성별</th>
                        <th>시</th>
                        <th>군구</th>
                        <th>유동 인구 수</th>
                    </tr>
                </thead>
            </table>
            <table>
                <tbody>

                <tr>
                    <td>1</td>
                    <td>20191101</td>
                    <td>00</td>
                    <td>40</td>
                    <td>여성</td>
                    <td>서울</td>
                    <td>영등포구</td>
                    <td>32670</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>20191101</td>
                    <td>00</td>
                    <td>50</td>
                    <td>남성</td>
                    <td>서울</td>
                    <td>구로구</td>
                    <td>27888</td>
                </tr>
                </tbody>
            </table>
            </>
        )
    }
}

export default R95