import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <div className='question-anser'>
                <h1>Q.1 : How does React work ?</h1>
                <hr />
                <p>
                    While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
                    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
                </p>

            </div>

            <div className='question-anser'>
                <h2>Q.2: Difference between props and useState</h2>
                <hr />
                <p>
                    <h5>props :</h5>
                    (i)The Data is passed from one component to another.
                    (ii) It is Immutable (cannot be modified).
                    (iii) Props can be used with state and functional components.
                    (iv) Props are read-only.
                    <br />
                    <h5>useState :</h5>
                    (i) The Data is passed within the component only.
                    (ii) It is Mutable ( can be modified).
                    (iii) State can be used only with the state components/class component.
                    (iv) State is both read and write.
                </p>

            </div>

            <div className='question-anser'>
                <h2> Q.3 : Application of  useEffect </h2>
                <hr />

                <p>
                    The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.
                </p>

            </div>
        </div>
    );
};

export default Question;