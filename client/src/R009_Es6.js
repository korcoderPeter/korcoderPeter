
import React, {Component } from "react";

class R009_Es6 extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {};
    }
    componentDidMount(){
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다\n다음 줄입니다';
        console.log(jsString1+ ' 문자열' + jsString2 +'~');

        var Es6String1 = 'ES6';
        var Es6String2 = '입니다';
        console.log(`${Es6String1} 문자열${Es6String2}!!____다음줄입니다`);


        var longString = "es6에 추가된 string 함수들입니다. ";
        console.log('startsWith : '+longString.startsWith("ES6에 추가"));
        console.log('endsWith : '+longString.endsWith("함수들입니다. "));
        console.log('includes : '+longString.includes("ES6에 추가"));
    }
render(){
    return (
        <h1>[이것은 es6 스트링]</h1>
    )
}

}

export default R009_Es6;