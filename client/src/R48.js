import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class R48 extends Component{
    constructor(props){
        super(props);
        this.state = {model : false}
    }

    toggle = (e) =>{
        this.setState({model : !this.state.model})
    }

    render()   {
        return (
            <>
                <Button color='warning' onClick={this.toggle}>model 버튼</Button>
                <Modal isOpen={this.state.model} fade={false} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>model header</ModalHeader>
                    <ModalBody>
                        텍스트 영역
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.toggle}>확인</Button>
                        <Button color='secondary' onClick={this.toggle}>닫기</Button>
                    </ModalFooter>

                </Modal>
            </>
        )
    }
}

export default R48