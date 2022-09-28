import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Summary from '../SummaryCart/Summary';
import './Exercises.css';
// import '../../../public/data.json';
const Exercises = () => {
    const [exsercises, setExsercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExsercises(data))
    }, []);




    return (
        <div className='Exercise-container'>
            <div>
                <div className='title'>
                    <h1>edX Physical Tips</h1>
                    <h3>Select today's exercise</h3>
                </div>
                <div className='Data-Container'>
                    {
                        exsercises.map(exercise => <Exercise
                            exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className='SummerysCart'>
                <Summary></Summary>
            </div>
        </div>


    );
};

export default Exercises;