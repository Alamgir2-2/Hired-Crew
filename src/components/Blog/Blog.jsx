import React from 'react';
import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {

    const [open, setOpen] = useState(0);
    const handleOpen = value => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0 },
    };

    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-6'>FAQ</h1>

            <div className='m-12'>
                <div className='my-5'>
                <Fragment>
                    <Accordion open={open === 1} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            When should you use context API?
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='py-12 text-justify'>
                                <span className='text-lg font-semibold  text-blue-500'>Context API</span> is a useful tool for managing global state in a React application. It allows you to pass data down the component tree without having to pass props explicitly to every component that needs access to that data.<br /><br />

                                <span className='text-lg font-bold'>Here are some situations where you might consider using Context API:<br /><br /></span>

                                <span className='text-lg font-bold'>1.</span> When you need to pass data down to deeply nested components: If you have a component tree with many levels of nesting, it can be cumbersome to pass props down through each level of the tree. Context API provides a way to make data available to all components in the tree, regardless of how deeply nested they are.<br /><br />

                                <span className='text-lg font-bold'>2.</span> When you have data that is used in multiple places: If you have data that is used in multiple components throughout your application, it can be useful to store that data in a centralized location using Context API. This makes it easier to update the data in one place and have those changes reflected throughout the application.<br /><br />

                                <span className='text-lg font-bold'>3.</span> When you need to manage global state: If you have data that needs to be accessed and updated across multiple components, you can use Context API to manage global state. This can simplify your code and reduce the likelihood of bugs caused by inconsistent state.
                            </div>
                        </AccordionBody>
                    </Accordion>
                </Fragment>
                </div>
                <div className='my-5'>
                <Fragment>
                    <Accordion open={open === 2} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            How to use Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='py-12 text-justify'>
                                A <span className='font-bold'>custom hook</span> in React is a function that allows us to reuse stateful logic across different components. Custom hooks are a way to extract repeated logic into reusable functions, which can be shared across multiple components. They follow the same rules as React's built-in hooks like useState, useEffect, and useContext, but are defined by the developer.<br /><br />

                                Custom hooks are useful when we find ourself repeating similar code patterns across different components. They can help us to keep our code organized, reduce duplication, and make it more reusable. By defining a custom hook, we can encapsulate complex logic and provide a simple and easy-to-use interface for other components to consume.<br /><br />

                                To define a custom hook, we can start with the use prefix followed by the name of the hook. A custom hook can use other hooks or stateful logic internally, but it must always return an array or an object with a fixed set of properties that can be consumed by the component using the hook.
                            </div>
                        </AccordionBody>
                    </Accordion>
                </Fragment>
                </div>
               <div className='my-5'>
               <Fragment>
                    <Accordion open={open === 3} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            What is useRef?
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='py-12 text-justify'>
                                <span className='font-bold'>useRef</span> is a hook in React that allows developers to create a mutable variable that persists between renders. It works by returning a ref object with a current property, which can be used to store a value or reference to a DOM element. Unlike state variables, updating the value of a useRef variable does not trigger a re-render of the component.<br /><br />

                                Developers can use useRef to access the value of an input element, store a reference to a DOM element, or store a value that persists between renders, such as a timer ID or a scroll position. The useRef hook is particularly useful in scenarios where direct manipulation of a DOM element is required, as it allows developers to access and modify the element without having to query the DOM every time.<br /><br />

                                To use useRef, developers create a ref variable using the useRef hook and pass it to the ref attribute of the DOM element they want to reference. They can then access the current property of the ref variable to read or modify the value or reference. Overall, useRef is a powerful tool that can help developers to write more efficient and performant React components.
                            </div>
                        </AccordionBody>
                    </Accordion>
                </Fragment>
               </div>
                <Fragment>
                    <Accordion open={open === 4} animate={customAnimation}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            What is useMemo?
                        </AccordionHeader>
                        <AccordionBody>
                            <div className='py-12 text-justify'>
                                <span className='font-bold'>useMemo</span> is a hook in React that allows developers to memoize the result of a function call and cache it for reuse between renders. It helps to optimize the performance of your application by avoiding unnecessary calculations and re-renders. Memoization is a technique that involves caching the result of a function call based on its arguments, so that if the same arguments are passed in again, the cached result can be returned instead of recalculating the function.<br /><br />

                                The useMemo hook takes two arguments: a function and an array of dependencies. The function is called on each render and the result is memoized if the dependencies haven't changed since the last render. If the dependencies have changed, the function is called again to recalculate the result, which is then memoized for the next render.<br /><br />

                                Developers can use useMemo to memoize expensive computations, such as filtering or sorting large arrays or formatting dates, and avoid repeating them unnecessarily on each render. By caching the results, useMemo helps to reduce the workload of the application and improve its performance.
                            </div>
                        </AccordionBody>
                    </Accordion>
                </Fragment>

            </div>


        </div>
    );
};

export default Blog;