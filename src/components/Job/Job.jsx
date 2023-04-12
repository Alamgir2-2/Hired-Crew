import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';
import { json } from 'react-router-dom';

const Job = () => {
    const [jobs, setJob] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);


    const handleClick =()=>{
        setShowAllJobs(true);
    }

    const jobDetailsHandler = (id)=>{
        console.log(id);

    }

    useEffect(() => {
        fetch('jobList.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div>
            <div className='text-center m-6'>
                    <h1 className='text-5xl m-4 font-bold'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            <div className='grid lg:grid-cols-2'>
            {
                jobs.slice(0,showAllJobs ? jobs.length :4).map(jobList => <JobList
                jobList = {jobList}
                key={jobList.id}
                jobDetailsHandler ={jobDetailsHandler}
                ></JobList>)
            }
            </div>

            <div className='text-center my-6'>
                {
                    !showAllJobs && (
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>See All Jobs</button>
                    )
                }
            </div>
        </div>
    );
};

export default Job;