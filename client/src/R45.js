import React, { Component } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";


class R45 extends Component{

    render(){
        return (
            <>
            <InputGroup>
                <Input placeholder="userId"/>
                <inputGroupAddon addonType='append'>
                    <InputGroupText>@reactmail.com</InputGroupText>
                </inputGroupAddon>
            </InputGroup>
            <InputGroup >
            <inputGroupAddon addonType='prepend'>
                <Button>버톤</Button>

            </inputGroupAddon>
            <Input/>
                
            </InputGroup>
            </>
        )
    }
}

export default R45
    

    
