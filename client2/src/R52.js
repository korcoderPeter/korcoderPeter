// import React, { Component } from "react";
// import { Progress } from "reactstrap";

// class R52 extends Component{
//     constructor(props){
//         super(props);
//         this.state = { progress : 0}
//     }

//     componentDidMount(){this.progress()}

    // progress = () => {
    //     if(this.state.progress !== 100){
    //         setTimeout(() => {
    //             this.setState({progress : this.state.progress +1});
    //             this.progress();
    //             console.log(this.state.progress)
    //         }.bind(this) 100 );
    //     }
    // }

//     render(){
//         return (
//             <>
//             <Progress color='info' value={this.state.progress}>
//                 {this.state.progress}%
//             </Progress>
//             <Progress multi>
//                 <Progress bar color="warning" value='25'>25%</Progress>
//                 <Progress bar color="success" value='35'>wow!</Progress>
//                 <Progress bar value='15'>meh</Progress>
//                 <Progress bar color="danger" value='25'>Look Out</Progress>
//             </Progress>
//             </>
//         )
//     }
// }

// export default R52;

import React, { Component } from "react";

class R52 extends Component{
    render(){
        return (
            <>
            </>
        )
    }
}

export default R52;