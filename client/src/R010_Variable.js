import React, {Component} from "react";

class R010_Variable extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
componentDidMount(){
    var varName = 'react';
    console.log('varName1 :' + varName);
    
    var varName = '200';
    console.log('varNmae2 :'+ varName);

    let letName = 'react';
    console.log('letName1 :' + letName);
    
    let letName1 = '200';
    console.log('letNmae2 :'+ letName1);

    const constName = 'react';
    console.log('constName1 :' + constName);
    
    
    


}
render(){
    return (
        <h1>[이것은 변수]</h1>
    )
}

}

export default R010_Variable;
 