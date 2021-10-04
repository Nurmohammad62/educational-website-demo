import React from 'react';
import errorImg from '../../images/error_404.jpg';

// not found component for not found page
const NotFound = () => {
    return (
        <div className='text-center' style={{backgroundColor:'#272041', height:"90vh"}}>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;