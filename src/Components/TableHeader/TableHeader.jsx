import React from 'react';
import Arrow from '../../Icon/Arrow.svg';
import './TableHeader.css'

export const TableHeader = ({ sortData }) => {
    return (
        <div className='main-table-header'>
            <div className='main-table-cell'>
                <h2>ID</h2>
                <img src={Arrow} onClick={() => sortData('id')} className='btn-sort' />
            </div>
            <div className='main-table-cell'>
                <h2>Заголовок</h2>
                <img src={Arrow} onClick={() => sortData('title')} className='btn-sort' />
            </div>
            <div className='main-table-cell'>
                <h2>Описание</h2>
                <img src={Arrow} onClick={() => sortData('body')} className='btn-sort' />
            </div>
        </div>
    )
}