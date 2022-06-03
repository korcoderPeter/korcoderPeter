import React, {Component} from "react";
import datatype from 'prop-types'

class R21 extends Component {
    render(){
        let { ReactNumber,
            ReactString
         } = this.props
        console.log(ReactNumber)
        return(
            <div style={{padding:'0px'}}>
                {ReactNumber}
                {ReactString}

            </div>
        )
    }
}

R21.propTypes = {
    ReactString : datatype.isRequired,
}


export default R21;
