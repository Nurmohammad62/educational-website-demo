import React from 'react';
import './Blog.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// single blog component
const Blog = (props) => {
    const {img, publishedDate, title} = props.blog;
    return (
        <Col>
            <img className='img-fluid rounded' src={img} alt="" />
            <p><small>{publishedDate}</small></p>
            <Link to='#' className='blog-link'><h2 className='blog-title'>{title}</h2></Link>
        </Col>
    );
};

export default Blog;