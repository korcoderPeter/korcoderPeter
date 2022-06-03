import React, { Component } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";


class R44 extends Component{
    render(){ // bsSize = 'sm'
        return(    
            <Form>
                <Label for='exampleGender'>gender</Label>
                <Input type='select' bsSize='lg'> 
                    <option>no</option>
                    <option>m</option>
                    <option>w</option>
                </Input>
                <Row form>
                    <Col md={5}>
                        <FormGroup>
                            <Label for='exampleAddress'>address</Label>
                            <Input type='text' name='address' id='address' />
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <FormGroup>
                            <Label for='exampleMobile'>address</Label>
                            <Input type='text' name='Mobile' id='Mobile' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for='exampleAge'>address</Label>
                            <Input type='text' name='age' id='age' />
                        </FormGroup>
                    </Col>
                </Row>  
            </Form>
        )
    }
}

export default R44