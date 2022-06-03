
import React, { Component } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

class R49 extends Component{
    constructor(props){
        super(props);
        this.state = {
            Nav: false
        }
    }
    toggle = () =>{
        this.setState({Nav : !this.state.Nav})
    }


    render(){
        return(
            <>
            <Navbar color='faded' light>
                <NavbarBrand href="/" className="mr-auto">네비 바</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className='mr-2' />
                <Collapse isOpen={this.state.Nav } navbar>
                    <NavItem>
                        <NavLink href='https://www.naver.com/'>react</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#'>2000</NavLink>
                    </NavItem>




                </Collapse>
            </Navbar>
            </>
        )
    }
}

export default R49
