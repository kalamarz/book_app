import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
    
    const { booksCount, pageSize, onPageChange } = props;

    const pagesCount = Math.ceil(booksCount / pageSize);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

  return (
    <nav className='pagination'>
        <ul className='pagination__list'>
            { pages.map(page => (
                <li key={page} className='pagination__item'>
                    <a className='pagination__link' 
                        href='#'
                        onClick={() => onPageChange(page)}>
                        {page}
                    </a>
                </li>
            ))}
           
        </ul>
    </nav>
  )
}

export default  Pagination