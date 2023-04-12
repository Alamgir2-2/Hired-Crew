import React, { useEffect, useState } from 'react';
import img from '../Image/person.png';
import CategoryList from '../CategoriList/CategoryList';
import { json } from 'react-router-dom';
import Job from '../Job/Job';

const Home = () => {

    const [home, setHome] = useState([]);

    useEffect(() => {
        fetch('categoryList.json')
            .then(res => res.json())
            .then(data => setHome(data))
            
    }, [])
    return (
        <>
            <section className='grid lg:grid-cols-2 place-items-center bg-gray-100'>
                <div className=''>
                    <h1 className='text-7xl my-4 font-bold'>One Step <br /> Closer to Your <br /><span className='text-blue-600'>Dream Job</span></h1>
                    <p className='text-justify w-96 mb-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8'>Get Started</button>
                </div>
                <div className='w-96'>
                    <img src={img} alt="" />
                </div>
            </section>
            <section>
                <div className='text-center m-6'>
                    <h1 className='text-5xl m-4 font-bold'>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid lg:grid-cols-4 place-items-center'>
                    {
                        home.map(category => <CategoryList
                            category={category}
                        ></CategoryList>)
                    }
                </div>
            </section>
        </>
    );
};

export default Home;