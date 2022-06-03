import React, {Component} from "react";


class R15 extends Component {
    componentDidMount(){
        var map_arr = [3,2,8,8]
        var map_newArr = map_arr.map(x => x)
        console.log('1. map_newArr :'+map_newArr)

        let map_mulitiArr = map_arr.map(x => x * 2)
        console.log('2. map_mulitiArr :'+map_mulitiArr)
        
        var ObjArray = [{
            key : 'react', key2 : '2'},
            {key3 : '리액트', key4: '투'
        }];
        let map_objArr = ObjArray.map((key, value) =>{
            console.log(key, value);
        });
        console.log('5. map_objArr :'+JSON.stringify(map_objArr));
    }
    render(){
        return (
            <h1>이것은 맵</h1>
        )
    }
}

export default R15;