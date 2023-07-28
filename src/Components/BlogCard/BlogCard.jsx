import React from 'react';
import './BlogCard.css'

export const BlogCard = ({ id, title, body }) => {

    return (
        <div className='blog_card'>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};