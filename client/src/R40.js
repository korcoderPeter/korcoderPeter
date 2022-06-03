
import React, { Component } from "react";
import { Card, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";


class R40 extends Component{
    render(){
        return(
            <div>
                <Card>
                    <CardImg top height="200px" src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fw.namu.la%2Fs%2F68ceecda255f94d46392c8ade5aea7c01713d134ec030bb7d29117c66c8cbdc11c5c53e7d213ea4561807aa6c7726a31efed9cd33a17e582b1d69a523bca3b7b81eec339e96469cab1b52dff91775aa37394330956ad0c73d9b59d72b5c582a7&type=ff264_180" alt="Card image"/>
                    <CardTitle>Card 제목</CardTitle>
                    <CardSubtitle>Card 부제목</CardSubtitle>
                    <CardText> Card 내용</CardText>
                    <Button>dd</Button>
                </Card>

                
            </div>
        )
    }
}


export default R40;