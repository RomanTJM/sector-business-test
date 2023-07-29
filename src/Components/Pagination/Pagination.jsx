import React from 'react';
import './Pagination.css'


export const Pagination = ({ tablePerPage, totalTable, paginate }) => {
    const pageNumbens = []

    for (let i = 1; i <= Math.ceil(totalTable / tablePerPage); i++) {
        pageNumbens.push(i)
    }
    return (
        <div className='pagination'>
            {
                pageNumbens.map(number => (
                    <div key={number}>
                        <button
                            className="pagination-btn"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </button>
                    </div>
                ))
            }
        </div>
    );
};