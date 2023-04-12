import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AppliedJobs = () => {

    const [appliedList, setAppliedList] = useState(null);

    const [remoteOrOnsiteFilter, setRemoteOrOnsiteFilter] = useState('');

    useEffect(() => {
        let item = (localStorage.getItem("appliedList"))
        if (item !== null) {
            setAppliedList(JSON.parse(item))
        }
    }, [])

    const navigate = useNavigate();

    const handleNavigation = (id) => {
        navigate(`/job/${id}`);
    }

    const handleFilter = (filter) => {
        setRemoteOrOnsiteFilter(filter);
    }

    const filteredList = remoteOrOnsiteFilter ? appliedList.filter((job) => job.RemoteOrOnsite === remoteOrOnsiteFilter) : appliedList;

    return (
        <div>
            <div className='text-4xl font-bold text-center my-8'>
                <h1>Applied Jobs</h1>
            </div>

            <div className='flex gap-4 justify-center'>
                <button className={`btn ${remoteOrOnsiteFilter==='Remote' ? 'bg-blue-600 text-white py-2 px-4 rounded' :'bg-white-500 text-blue-700 border font-semibold py-2 px-4 border-blue-500 rounded'}`}onClick={()=>handleFilter('Remote')}>Remote</button>
                <button className={`btn ${remoteOrOnsiteFilter==='Onsite' ? 'bg-blue-600 text-white py-2 px-4 rounded' :'bg-white-500 text-blue-700 border font-semibold py-2 px-4 border-blue-500 rounded'}`}onClick={()=>handleFilter('Onsite')}>Onsite</button>
                <button className={`btn ${!remoteOrOnsiteFilter ? 'bg-blue-600 text-white py-2 px-4 rounded' :'bg-white-500 text-blue-700 border font-semibold py-2 px-4 border-blue-500 rounded'}`}onClick={()=>handleFilter('')}>All</button>
            </div>
            {
                filteredList &&filteredList.map(
                    (val,i)=>(
                        <div key={i}>

                           <div className='bg-gray-200 rounded m-5 p-5 grid lg:grid-cols-3 items-center place-items-center'>
                           <div>
                                <img src={val.image} alt="" />
                            </div>
                            <div>
                                <p className='text-lg font-bold my-3'>{val.job_title}</p>

                                <p className='my-2'>{val.company}</p>

                                <div className='flex gap-4 my-4'>
                                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{val.RemoteOrOnsite}</button>
                                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{val.FullTimeOrPartTime}</button>
                                </div>

                                <p className='flex gap-2 my-2'><img src={val.location} alt="" />{val.Address}</p>
                                <p className='flex gap-2 my-2'><img src={val.dollar} alt="" />{val.salary}</p>

                            </div>
                            <div>
                                <button onClick={()=>handleNavigation(val.id)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View Details</button>
                            </div>

                           </div>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default AppliedJobs;