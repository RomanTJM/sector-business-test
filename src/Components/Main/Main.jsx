import React, { useState } from 'react';
import { PAGE_SIZE } from '../../Const/Const'
import { BlogCard } from '../BlogCard/BlogCard';
import './Main.css';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import { TableHeader } from '../TableHeader/TableHeader';
import { PrevButton } from '../PrevButton/PrevButton';
import { NextButton } from '../NextButton/NextButton';

export const Main = ({ filtredBlogs, setFiltredBlogs, blogs }) => {
    const [directionSort, setDirectionSort] = useState(true)
    const [pageActive, setPageActive] = useState('pagination-btn')
    const [currentPage, SetCurrentPage] = useState(1)
    const tablePerPage = PAGE_SIZE;

    const lastTableIndex = currentPage * tablePerPage
    const firstountryIndex = lastTableIndex - tablePerPage
    const currentTable = filtredBlogs.slice(firstountryIndex, lastTableIndex)

    const paginate = (pageNumber) => {
        SetCurrentPage(pageNumber)
        setPageActive('active')
    }

    const sortData = (field) => {
        const copyData = filtredBlogs.concat();
        let sortData;

        if (directionSort) {
            sortData = copyData.sort(
                (a, b) => { return a[field] > b[field] ? 1 : -1 }
            )
        } sortData = copyData.reverse(
            (a, b) => { return a[field] > b[field] ? 1 : -1 }
        )
        setFiltredBlogs(sortData)
        setDirectionSort(!directionSort)
    }

    return (
        <div className='main'>
            <Search
                blogs={blogs}
                setFiltredBlogs={setFiltredBlogs}
            />
            <TableHeader sortData={sortData} />
            {
                currentTable.map((item) => (
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
                <PrevButton
                    currentPage={currentPage}
                    SetCurrentPage={SetCurrentPage} />
                <Pagination
                    tablePerPage={tablePerPage}
                    totalTable={filtredBlogs.length}
                    paginate={paginate}
                    pageActive={pageActive}
                    currentPage={currentPage}
                />
                <NextButton
                    currentPage={currentPage}
                    SetCurrentPage={SetCurrentPage}
                />
            </div>
        </div>
    )
}