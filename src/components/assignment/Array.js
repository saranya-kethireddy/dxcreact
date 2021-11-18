import React, { Component } from 'react';

function Array() {

    const myArray = ['saranya', 'shagufta', 'sandeep', 'sandhya', 'satvika'];

    return (
        <div className="container">
            <h1> Example of Array in React  </h1>

            {myArray.map(name => (
                <li>
                    {name}
                </li>
            ))}

        </div>
    );
}

export default Array;