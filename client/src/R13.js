import React, {Component} from "react";

class R13 extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrowFunc :'react200',
            num : 3
        };
    }
    componentDidMount(){
        function1(1);
        this.function2(1,1);
        this.function3(1,3);
        this.function4();
        this.function5(0,2,3);
        function function1(num1){
            return console.log(num1 + '. es5 function');
        }
    }
    function2 = (num1, num2) =>{
        let num3 = num1 + num2;
        console.log(num3 + '.arrowfunction '+ this.state.arrowFunc);
    }
    function3(){
        var this_bind = this;
        setTimeout(() => {
            console.log(this_bind.state.num + 'es5 callback function nobind :');
            console.log(this.state.arrowFunc);

        }, 100);

    }
    function4() {
        setTimeout(function() {
            console.log('4, es5 callback function bind :'+ this.state.arrowFunc);
        }.bind(this),100);
    }
    function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+ '. arrow callback function :' + this.state.arrowFunc);
        }, 100);
    }

    render(){
        return(
            <h1>이것은 풩션 종류</h1>
        )
    }

}
export default R13;