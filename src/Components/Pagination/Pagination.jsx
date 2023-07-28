import React from 'react';
import './Pagination.css'


export const Pagination = ({ countrysPerPage, totalCountry, paginate }) => {
    const pageNumbens = []

    for (let i = 1; i <= Math.ceil(totalCountry / countrysPerPage); i++) {
        pageNumbens.push(i)
    }
    return (
        <div className='pagination'>
            {
                pageNumbens.map(number => (
                    <div key={number}>
                        <div
                            className="pagination-number"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};