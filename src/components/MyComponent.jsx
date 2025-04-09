import React from 'react';
import { useState } from 'react';

const MyComponent = () => {
    console.log('My Landing Page is running OK');

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h2>Hello from MyComponent, Foodie!</h2>
            <p>You clicked {count} times</p>

            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default MyComponent;
