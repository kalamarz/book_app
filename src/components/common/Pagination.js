import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    
    const { booksCount, pageSize, onPageChange } = props;

    const pagesCount = Math.ceil(booksCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
        <ul>
            { pages.map(page => (
                <li key={page}>
                    <a onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
           
        </ul>
    </nav>
  )
}

export default  Pagination