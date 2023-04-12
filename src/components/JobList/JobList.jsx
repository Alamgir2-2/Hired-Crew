import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({jobList,jobDetailsHandler}) => {
    // console.log(props);
    const { image, job_title, company, location, salary, dollar,id,Address,RemoteOrOnsite,FullTimeOrPartTime } = jobList;
    
    return (
        
        <div className='border m-6 p-6 rounded'>
            <div>
                <img src={image} alt="" />
                <h1 className='my-3 font-bold text-lg'>{job_title}</h1>
                <p className='mb-5'>{company}</p>
            </div>
            <div className='flex gap-5 mb-5'>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{RemoteOrOnsite}</button>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{FullTimeOrPartTime}</button>
            </div>
            <div className='flex gap-8'>
                <div className='flex gap-2'>
                    <img src={location} alt="" />
                    <p>{Address}</p>
                </div>

                <div className='flex gap-2'>
                    <img src={dollar} alt="" />
                    <p>Salary {salary}</p>
                </div>
            </div>
            <div className='mt-5'>
                
                <Link to={`/job/${id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View Details</button></Link>
            </div>
        </div>
    );
};

export default JobList;