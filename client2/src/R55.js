import React, { Component } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

class R55 extends Component{
    constructor(props){
        super(props);
        this.state = {
            TabState : 'react'
        }
    }

    toggle = (tabnum) => {
        if(this.state.TabState !== tabnum) this.setState({TabState : tabnum});
    }

    render(){
        return(
            <>
            <Nav tabs>
                <NavItem>
                    <NavLink onClick={() => {this.toggle('react'); }}>first tab</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => {this.toggle('200'); }}>두번째 tab</NavLink>
                </NavItem>
            </Nav>
                <TabContent activeTab={this.state.TabState}>
                    <TabPane tabId='react'><h3>react</h3></TabPane>
                    <TabPane tabId='200'><h3>200</h3></TabPane>
                </TabContent>
            </>
        )
    }
}

export default R55;