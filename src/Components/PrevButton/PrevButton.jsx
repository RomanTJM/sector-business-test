import React from 'react';
import './PrevButton.css';

export const PrevButton = ({ currentPage, SetCurrentPage }) => {

    const prevPage = () => {
        if (currentPage < 2) {
            return
        } SetCurrentPage(currentPage - 1)
    }

    return (
        <div>
            <button className='btn-page' onClick={prevPage}>Назад</button>
        </div>
    )
}