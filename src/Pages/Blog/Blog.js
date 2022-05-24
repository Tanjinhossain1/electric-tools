import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='lg:w-2/4 mb-12 mx-auto'>
                <div className='mt-12'>
                    <h1 className='text-2xl font-semibold'>1. How will you improve the performance of a React Application?</h1>
                    <p className='font-semibold'>ANS: <small> When we need to render the multiple elements in a component or return a group of related items, using a div or another element to enclose the elements could add a node in the DOM. So to avoid this, we can use React Fragmentin React, which will not add any other nodes to the DOM.
                        It is one of the great ways to avoid adding any unnecessary nodes to the DOM and web components as children for React. Fragment could also be used and also mark it with a key.
                        The term Immutability refers to something whose value or state cannot be changed. So, in programming, a variable is immutable when its value cannot change after it's created. So, using immutability would mean that we instead make new copies of objects/arrays instead of changing the data. If we use immutable data in our React app, the diffing algorithm used by React for tracking the changes to our app becomes cheap.</small></p>
                </div>
                <div className='mt-12'>
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
                <div className='mt-12'>
                    <h1 className='text-2xl font-semibold'>3. How does prototypical inheritance work?</h1>
                    <p>AND: <small>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.</small></p>
                </div>
                <div className='mt-12'>
                    <h1 className='text-2xl font-semibold'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p>ANS: <small>basically use this [...] then i don't change the state value thn state will be not work for it. When i use setProducts then they give me a function then i chang the value of state and this function give some value then you use it when reload the page then state value is initial level like default value or when i use [...] then state value not set .</small></p>
                </div>
                <div className='mt-12'>
                    <h1 className='text-2xl font-semibold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p>ANS: <span>When you using all name to find it then you using filter or give the condition to find all name properties on array of product. Or more way to find the products by name. When you need to find only one product then using find on this or give condition then your name is come or you use it.</span></p>
                </div>
                <div className='mt-12'>
                    <h1 className='text-2xl font-semibold'>6. What is a unit test? Why should write unit tests?</h1>
                    <p>ANS: <small>
                        UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                    </small></p>
                </div>
            </div>
        </div>
    );
};

export default Blog;