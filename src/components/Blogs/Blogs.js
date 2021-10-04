import React from 'react';
import './Blogs.css';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

// blogs component
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <article>
            <h1 className='blogs-heading'>Blogs</h1>
            <Container className='mt-5 mb-5'>
                <Row xs={1} md={2} className="g-4">
                    {
                        // map blogs data for single blog
                        blogs.map(blog => <Blog 
                        key = {blog.id}
                        blog = {blog}
                        ></Blog>)
                    }
                </Row>
            </Container>
        </article>
    );
};

export default Blogs;