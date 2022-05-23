import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='lg:w-2/4 mx-auto'>
                <div>
                    <h1 className='text-2xl font-semibold'>1. How will you improve the performance of a React Application?</h1>
                    <p className='font-semibold'>ANS: <small> When we need to render the multiple elements in a component or return a group of related items, using a div or another element to enclose the elements could add a node in the DOM. So to avoid this, we can use React Fragmentin React, which will not add any other nodes to the DOM.
                        It is one of the great ways to avoid adding any unnecessary nodes to the DOM and web components as children for React. Fragment could also be used and also mark it with a key.
                        The term Immutability refers to something whose value or state cannot be changed. So, in programming, a variable is immutable when its value cannot change after it's created. So, using immutability would mean that we instead make new copies of objects/arrays instead of changing the data. If we use immutable data in our React app, the diffing algorithm used by React for tracking the changes to our app becomes cheap.</small></p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>2. What are the different ways to manage a state in a React application?</h1>
                    <p>AND: <small>There are four main types of state you need to properly manage in your React apps:  </small><br />
                      <p className=''>
                      1. Local state: <small>Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.</small> <br />
                        2. Global state: <small>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.</small>  <br />
                        3. Server state: <small>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.</small> <br />
                        4. URL state: <small>URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</small> <br />
                      </p>
                      <p>
                      There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                      </p>
                   </p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>3. How does prototypical inheritance work?</h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;