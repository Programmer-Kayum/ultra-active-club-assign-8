import React from 'react';
import './Exercise.css';


const Exercise = ({ exercise, handelAddToIteam }) => {

    const { picture, age, name, time } = exercise;

    return (
        <div className='data-container'>
            <img src={picture} alt="" />

            <div className='exercis-info'>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Time : {time}s</p>
            </div>

            <div>
                <button onClick={() => handelAddToIteam(exercise)} className='btn'>
                    <p>Add to Cart</p>
                </button>
            </div>

        </div>
    );
};

export default Exercise;