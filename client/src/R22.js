import React, {Component} from "react";
import datatype from 'prop-types'

class R22 extends Component {
    
    render(){
        let {
            ReactString,
            ReactNumber
        } = this.props


        return (
            <div style={{padding:'0px'}}>
                {ReactString}
                {ReactNumber}

            </div>
        )
    }


}
R22.defaultProps = {
    ReactString: '리액트',
    ReactNumber: 400
}



export default R22;
