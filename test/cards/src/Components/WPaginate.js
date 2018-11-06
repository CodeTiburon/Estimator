import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function WPaginate(props) {
    if ( props.pageCount < 1 ) return null;

    let start = (props.page < 3) ? 1 : props.page - 2;
    let finish = start + 4;

    if (finish > props.pageCount) {
        finish = props.pageCount;
        start = finish - 4;
    }

    let pages = [];

    pages.push(
        <PaginationItem key="previous" disabled={start < 2}>
            <PaginationLink previous href={'/page/' + (start - 1)} />
        </PaginationItem>
    );

    for (let i = start; i <= finish; i++) {
        pages.push(
            <PaginationItem key={i} disabled={props.page === i}>
                <PaginationLink href={'/page/' + i}>{i}</PaginationLink>
            </PaginationItem>
        );
    }

    pages.push(
        <PaginationItem key="next" disabled={props.pageCount === finish }>
            <PaginationLink next href={'/page/' + (finish + 1)} />
        </PaginationItem>
    );

    return (
        <div className="row justify-content-center">
            <Pagination aria-label="Page navigation example">
                {pages}
            </Pagination>
        </div>
    );
}

export default WPaginate;
