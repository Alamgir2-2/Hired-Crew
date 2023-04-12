import React from 'react';

const CategoryList = (props) => {
    // console.log(props);
    const {image,title,job_available}=props.category;
    return (
        <div>
           <div className='bg-gray-300 m-5 p-10 rounded w-72 h-48'>
            <img src={image} alt="" />
            <h1 className='my-2'>{title}</h1>
            <p>{job_available} Jobs Available</p>
           </div>
        </div>
    );
};

export default CategoryList;