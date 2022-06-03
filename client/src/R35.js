import React, { Component } from "react";
import { Badge } from "reactstrap";


class R35 extends Component{
    render(){
        return (
            <div>
                <h1>프로덕트 네임 <Badge color='secondary'>hit</Badge></h1>
                <button color='light' outline>
                    accessor <Badge color='dark'>4</Badge>
                    
                </button>
                <Badge color="dnager" pill>pill</Badge>
                <Badge>golink</Badge>

            </div>           
        )
    }
}


export default R35;