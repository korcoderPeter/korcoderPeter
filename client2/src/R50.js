import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class R50 extends Component{
    Pagination = (type) =>{
        alert('Go' + type)
    }
    render(){
        return(
            <>
            <Pagination size='lg' aria-lavel='Page navigation example'>
                <PaginationItem>
                    <PaginationLink previous onClick={e => this.Pagination('previous')}></PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={e => this.Pagination('1')}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={e => this.Pagination('2')}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last onClick={e => this.Pagination('last')}></PaginationLink>
                </PaginationItem>

            </Pagination>
            </>
            )
    }
}


export default R50