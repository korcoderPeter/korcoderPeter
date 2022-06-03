import React, {Component} from "react";

class R14 extends Component{
    componentDidMount(){
        var for_arr = [3,2, 8 ,8];
        var for_newArr = [];

        for (let i = 0; i < for_arr.length; i++) {
            for_newArr.push(for_arr[i]);
        }
        console.log('1. for_newArr : ['+for_arr+']');


        var forEach_arr = [3,3,9,8];
        var forEach_newArr = [];
        forEach_arr.forEach((result) => {
            forEach_newArr.push(result);
        })
        console.log('2. forEach_newArr ['+forEach_newArr +']');


    }

    render(){
        return (
            <h1>this is foreach</h1>
        )
    }
}

export default R14;