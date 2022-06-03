import React, {Component} from "react";

class ClassPrototype extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        // es5 프로토타입
        var examCountFunc = (function () {
            function examCount(num) {
                this.number =num;

                
            }

            examCount.prototype.show = function () {
                console.log('1, react_'+this.number);

                
            };

            return examCount;
        }());
        var cnt = new examCountFunc('200');
        cnt.show();

        //es6 클래스
        class examCountClass {
            constructor(num2){
                this.number2 = num2;
        
            }
            show(){
                console.log(`2, react_${this.number2}`);
            }
        }
        var cnt2 = new examCountClass('2헌드레드');
        cnt2.show();
    }
    render(){
       return(
           <h1></h1>
       )
    }

}


export default ClassPrototype;