import React from 'react';
import './Search.css';
import SearchIcon from '../../Icon/SearchIcon.svg'

export const Search = ({ blogs, setFiltredBlogs }) => {

    const onSearchHandler = (substr) => {
        const newBlog = blogs.filter(
            (blog) => blog.title.includes(substr) || blog.body.includes(substr)
        );
        setFiltredBlogs(newBlog);
    };

    return (
        <div className='search'>
            <input
                type="search"
                onChange={(e) => onSearchHandler(e.target.value)}
                className="input"
                name="txt"
                placeholder='Поиск'
            />
            <img src={SearchIcon} alt='Close' className='search-icon' />
        </div>
    )
}