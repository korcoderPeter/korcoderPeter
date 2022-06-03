 import React, { Component } from "react";
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from "reactstrap";

 class R51 extends Component{
     render(){
         return(
             <>
             <Button id='Popover_id' type='button'>
                 Popover button
             </Button>
             <UncontrolledPopover placement="right" target='Popover_id'>
                 <PopoverHeader>react 200</PopoverHeader>
                 <PopoverBody>text~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</PopoverBody>
             </UncontrolledPopover>
             </>
         )
     }
 }


 export default R51