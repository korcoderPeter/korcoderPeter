import React, { Component } from "react";
import { Table } from "reactstrap";

class R54 extends Component{
    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>넘버</th>
                        <th>북 네임</th>
                        <th>프라이스</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                       <th>1</th>
                       <hd>react 100</hd>
                       <hd>10000</hd>
                       </tr> 


                       
                       <tr>
                       <th>2</th>
                       <hd>react 200</hd>
                       <hd>20000</hd>
                       </tr> 

                </tbody>
            </Table>
        )
    }
}

export default R54;