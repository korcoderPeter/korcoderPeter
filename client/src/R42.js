import React, { Component } from "react";
import { Button, Card, CardBody, UncontrolledCollapse } from "reactstrap";


class R42 extends Component{
    render(){
        return (
            <div>
                <Button color="warning" id='toggle'>펼치기/접기</Button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            react200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

            </div>
        )
        //Collapse 은 설정이 필요함
        //ncontrolledCollapse 설정 귀찮으면 이게 좋음

    }
}


export default R42