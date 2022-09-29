import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Question from '../QuestionPart/Question';
import Summary from '../SummaryCart/Summary';
import './Exercises.css';
// import '../../../public/data.json';
const Exercises = () => {
    const [exsercises, setExsercises] = useState([]);
    const [iteam, setIteam] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExsercises(data))
    }, []);



    const handelAddToIteam = (exercis) => {
        // <Summary time={exercis}></Summary>
        const newIteam = [...iteam, exercis];
        setIteam(newIteam);

    }

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
                            key={exercise.id}
                            handelAddToIteam={handelAddToIteam}
                        ></Exercise>)
                    }
                </div>

                <Question></Question>
            </div>
            <div className='SummerysCart'>

                <Summary iteam={iteam}></Summary>

            </div>
        </div>


    );
};

export default Exercises;