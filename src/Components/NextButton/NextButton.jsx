import React from 'react';
import { PAGE_SIZE } from '../../Const/Const'
import './NextButton.css';

export const NextButton = ({ currentPage, SetCurrentPage }) => {

    const nextPage = () => {
        if (currentPage > PAGE_SIZE - 1) {
            return
        } SetCurrentPage(currentPage + 1)
    }

    return (
        <div>
            <button className='btn-page' onClick={nextPage}>Далее</button>
        </div>
    )
}