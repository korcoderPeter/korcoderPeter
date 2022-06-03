import { Alert } from "reactstrap";
import React, { Component } from "react";
import { UncontrolledAlert } from "reactstrap";


class R34 extends Component{
    render(){
        return(
            <div>
                <Alert color='light'>
                    simple Alert [color : light]
                </Alert>
                <UncontrolledAlert color='warning'>
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>

            </div>
        )
    }
}

export default R34;