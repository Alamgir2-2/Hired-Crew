import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../../../public/jobList.json'


const JobDetails = () => {

    const { id } = useParams();
    const [jobDetail, setJobDetail] = useState([]);

    const [alreadyApplied, setAlreadyApplied] = useState(false)

    const checkApplied = () => {
        let item = localStorage.getItem("appliedList")
        if (item !== null) {
            item = JSON.parse(item)
            item.forEach(element => {
                if (element.id == id) setAlreadyApplied(true)
            })
        }
    }

    useEffect(() => {
        console.log(id)
        const arr = jobs.filter((val) => val.id == id)
        setJobDetail(arr)
        checkApplied()
    }, [id])

    const handleApply = () => {
        let item = JSON.parse(localStorage.getItem("appliedList"))
        if (item !== null) {
            item.push(jobDetail[0])
        }
        else {
            item = []
            item.push(jobDetail[0])
        }
        localStorage.setItem("appliedList", JSON.stringify(item))
        checkApplied()
    }

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-6'>Job Details</h1>

            {
                jobDetail && jobDetail.map(
                    (val, i) => (
                        <div key={i} >
                            <div className='grid grid-cols-2 gap-4 m-6 rounded justify-between'>
                                <div className='ml-24'>
                                    <p><span className='text-lg font-bold'>Job Description: </span>{val.JobDescription}</p>

                                    <p><span className='text-lg font-bold'>Job Responsibility: </span>{val.JobResponsibility}</p>

                                    <p><span className='text-lg font-bold'>Educational Requirements: </span> {val.Education}</p>

                                    <p><span className='text-lg font-bold'>Experience: </span><br />{val.Experience}</p>
                                </div>
                                <div className='w-96'>
                                    <div className='bg-gray-300 rounded p-5 '>
                                        <h1 className='text-lg font-bold'>Job Details</h1>
                                        <hr />
                                        <div>
                                            <div>
                                                
                                                <p className='flex gap-2 my-4'><img src={val.dollar} alt="" />Salary:{val.salary}</p>

                                                <p className='flex gap-2 my-4'><img src="https://i.ibb.co/DWvNSn7/Frame-1.png" alt="" /> Job Title: {val.job_title}</p>
                                                
                                                <p className='text-lg font-bold'>Contact Information</p>
                                                <hr />

                                                <p className='flex gap-2 my-4'><img src="https://i.ibb.co/56nkJtJ/Frame-2.png" alt="" /> Phone: {val.Phone}</p>


                                                <p className='flex gap-2 my-2'><img src="https://i.ibb.co/3CSBmJ4/Frame-3.png" alt="" />  Email: {val.Email}</p>

                                                <p className='flex gap-2 my-2'><img src="https://i.ibb.co/2c7qXZt/Frame-4.png" alt="" /> Address: {val.Address}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='text-center mt-6'>
                                        <button className='bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={handleApply} disabled={alreadyApplied}>Apply Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                )
            }
        </div>
    );
};

export default JobDetails;