import React, { useState } from 'react';
import { PAGE_SIZE } from '../../Const/Const'
import { BlogCard } from '../BlogCard/BlogCard';
import './Main.css';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import Arrow from '../../Icon/Arrow.svg';

export const Main = ({ filtredBlogs, setFiltredBlogs, blogs }) => {

    const [directionSort, setDirectionSort] = useState(true)

    // Пагинация (постраничный вывод)
    const [currentPage, SetCurrentPage] = useState(1)
    const tablePerPage = PAGE_SIZE;

    const lastTableIndex = currentPage * tablePerPage
    const firstountryIndex = lastTableIndex - tablePerPage
    const currentTable = filtredBlogs.slice(firstountryIndex, lastTableIndex)

    const paginate = pageNumber => SetCurrentPage(pageNumber)
    const nextPage = () => SetCurrentPage(prev => prev + 1)
    const prevPage = () => SetCurrentPage(prev => prev - 1)

    // поиск

    const onSearchHandler = (substr) => {
        const newBlog = blogs.filter(
          (blog) => blog.title.includes(substr) || blog.body.includes(substr)
        );
        setFiltredBlogs(newBlog);
      };

    //   Сортировка

    const sortData = (field) => {

        const copyData = filtredBlogs.concat();

        let sortData;

        if (directionSort) {
          sortData = copyData.sort(
            (a, b) => {return a[field] > b[field] ? 1 : -1}
          )
        } sortData = copyData.reverse(
          (a, b) => {return a[field] > b[field] ? 1 : -1}
        )

        setFiltredBlogs(sortData)
        setDirectionSort(!directionSort)
    }

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
                <button className='btn-page' onClick={prevPage}>Назад</button>
                <Pagination
                    tablePerPage={tablePerPage}
                    totalTable={filtredBlogs.length}
                    paginate={paginate}
                />
                <button className='btn-page' onClick={nextPage}>Далее</button>
            </div>
        </div>
    )
}