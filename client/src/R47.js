import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";

class R47 extends Component{
    render(){
        return(
            <>
                <ListGroup>
                    <ListGroupItem color='danger' 
                    className="justify-content-between" >
                        Badge<Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag='a' href="#">disabled</ListGroupItem>
                    <ListGroupItem tag='a' href="https://www.naver.com/">네이버</ListGroupItem>
                    <ListGroupItem tag='button' action onClick={e => alert('버튼')}>버튼</ListGroupItem>
                    
                    
                </ListGroup>
            </>
        )
    }
}


export default R47