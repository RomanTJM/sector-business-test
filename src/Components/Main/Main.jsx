import React, { useState } from 'react';
import { BlogCard } from '../BlogCard/BlogCard';
import './Main.css';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import Arrow from '../../Icon/Arrow.svg';

export const Main = ({ filtredBlogs, onSearchHandler, sortData }) => {

    // Пагинация (постраничный вывод)
    const [currentPage, SetCurrentPage] = useState(1)
    const [countrysPerPage] = useState(10)

    const lastCountryIndex = currentPage * countrysPerPage
    const firstountryIndex = lastCountryIndex - countrysPerPage
    const currentCountry = filtredBlogs.slice(firstountryIndex, lastCountryIndex)

    const paginate = pageNumber => SetCurrentPage(pageNumber)
    const nextPage = () => SetCurrentPage(prev => prev + 1)
    const prevPage = () => SetCurrentPage(prev => prev - 1)

    return (
        <div className='main'>
            <Search onSearchHandler={onSearchHandler} />
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
            {
                currentCountry.map((item) => (
                    <BlogCard
                        key={item.id}
                        title={item.title}
                        body={item.body}
                        id={item.id}
                    />
                )
                )
            }
            <div className='pagination-block'>
                <button className='btn-page' onClick={prevPage}>Назад</button>
                <Pagination
                    countrysPerPage={countrysPerPage}
                    totalCountry={filtredBlogs.length}
                    paginate={paginate}
                />
                <button className='btn-page' onClick={nextPage}>Далее</button>
            </div>
        </div>
    )
}