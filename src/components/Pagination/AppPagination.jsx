// import React from ' react';
import { Pagination } from '@mui/material';
import "./styles.css";
import { useState } from 'react';


const AppPagination = (props) => {
    const handleChange = (page) => {
        props.setPage(page)
    }
    return (
        <div className='pag-container'>
            <div className='pag-div'>
                <Pagination onChange={e => handleChange(e.target.textContent)} count={2}  />
            </div>
        </div>
    );
}
export default AppPagination;