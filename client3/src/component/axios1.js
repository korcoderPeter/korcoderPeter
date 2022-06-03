import React, { Component } from "react";
import axios from "axios";

class axios1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            responseFPList : '',
            append_FPList : '',
        }
    }
    componentDidMount(){
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = () => {
        axios.get('http://openapi.seoul.go.kr:8088/sample/json/GlobalJobSearch/1/5/').then(
            response =>{
                try {
                    this.setState({responseFPList : response.data});
                    this.setState({append_FPList :this.FoatPopulListAppend()})
                } catch (error) {
                    alert(error)
                }
            }
        ).catch(error => {alert(error); return false});
    }
    FoatPopulListAppend = () => {
        let result =[]
        var FPList = this.state.responseFPList.data
        var jsonString = JSON.stringify(FPList)


        var json = json.parse(jsonString)

        for(let i= 0; i<json.row.length; i++){
            var data = json.row[i]
            var idx = i + 1
            result.push(
               
                <tr>
                    <td>{idx}</td>
                    <td>{data.ARTICLE_SEQ}</td>
                    <td>{data.REG_DT}</td>
                    <td>{data.JOB_LOCATION}</td>
                    <td>{data.JOB_TEL}</td>
                    <td>{data.JOB_CLOSING_DT}</td>
                    <td>{'z'}</td>
                    <td>{'z'}</td>

                </tr>
                
            )
        }
        return result
    }


    render(){
        return(
            <>
            <table>
                <tbody>

                {this.state.append_FPList}
                </tbody>
            </table>
            </>
        )
    }
}

export default axios1;