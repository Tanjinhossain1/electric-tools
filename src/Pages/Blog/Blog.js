import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='lg:w-2/4 mx-auto'>
                <div>
                    <h1 className='text-xl font-semibold'>1. How will you improve the performance of a React Application?</h1>
                    <p className='font-semibold'>ANS: <small> When we need to render the multiple elements in a component or return a group of related items, using a div or another element to enclose the elements could add a node in the DOM. So to avoid this, we can use React Fragmentin React, which will not add any other nodes to the DOM.
                        It is one of the great ways to avoid adding any unnecessary nodes to the DOM and web components as children for React. Fragment could also be used and also mark it with a key.
                        The term Immutability refers to something whose value or state cannot be changed. So, in programming, a variable is immutable when its value cannot change after it's created. So, using immutability would mean that we instead make new copies of objects/arrays instead of changing the data. If we use immutable data in our React app, the diffing algorithm used by React for tracking the changes to our app becomes cheap.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;