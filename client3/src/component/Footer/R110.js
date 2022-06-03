import { keyBy } from "lodash";
import React, { Component } from "react";



class R110 extends Component {
    constructor(props){
        super(props);
        this.state = {
            whatKindOf : '',
            HotelLv : '',
            Name : '',




        }

    }

    componentDidMount = async () => {
        const response = await fetch('http://openapi.seoul.go.kr:8088/sample/json/SebcHotelListKor/1/5/', {});
        const body = await response.json();
        this.setState({
            whatKindOf : 'body.message : '+body.SebcHotelListKor.row[0].CATE1_NAME,
            HotelLv :'body.message : '+body.SebcHotelListKor.row[0].CATE3_NAME,
            Name : 'body.message : '+body.SebcHotelListKor.row[0].NAME_KOR,

        })
    }

    render(){
        return (
            <>
            <h1>{this.state.whatKindOf}</h1>
            <h1>{this.state.HotelLv}</h1>
            <h1>{this.state.Name}</h1>
            </>
        )
    }
}

export default R110