import React from 'react';
import Arrow from '../../Icon/Arrow.svg';
import './SortTable.css'

export const SortTable = () => {

    return (
        <div>
            <img type="button" src={Arrow} className='btn-sort' />
        </div>
    );
};