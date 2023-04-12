import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 p-6'>
            <div className='grid lg:grid-cols-5 place-items-center mb-8 text-gray-300'>
                <div>
                    <h1 className='text-3xl font-bold'>Hired Crew</h1>
                    <p className='my-3'>There are many variations of passages of Lorem Ipsum</p>
                    <img src="https://i.ibb.co/cJfmYRj/Group-9969.png" alt="" />
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Career</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Product</h1>
                    <ul>
                        <li>Prototype</li>
                        <li>Customers</li>
                        <li>Plans & Pricing</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Support</h1>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developer</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Contact</h1>
                    <ul>
                        <li>524 Broadway, NYC</li>
                        <li>+880 1648263272</li>

                    </ul>
                </div>
            </div>
            <hr />
            <div className='text-center my-5 text-gray-500'>
                <h1>@2023 Hired Crew. All Rights Reserved</h1>
            </div>

        </div>
    );
};

export default Footer;