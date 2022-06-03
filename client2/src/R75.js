import React from "react";
import withHocComponent from "./withHocComponent";


class R75 extends React.Component{
    render(){
        console.log('2 hocComponent render')
        return(
            <>

            <h1>props.name {this.props.name}</h1>
            </>
        )
    }
}


export default withHocComponent(R75, 'R75')