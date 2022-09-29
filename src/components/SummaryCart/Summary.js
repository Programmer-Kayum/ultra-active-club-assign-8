import React, { useState } from 'react';
import './Summary.css';


const Summary = (props) => {

    const [breakTime, setBreakTime] = useState([])

    const addBreakTime = (time) => {
        setBreakTime(time);
    }

    const { iteam } = props
    let totalTime = 0;
    for (const time of iteam) {
        totalTime = totalTime + time.time;
    }





    return (
        <div className='summary-container'>



            <div className='myself'>
                <h4>Mohammad Kayum Islam</h4>
                <p>HSTU,Dinajpur</p>
            </div>

            <div className='info-container'>
                <div className='info'>
                    <h3>70<small>kg</small></h3>
                    <small>Weight</small>
                </div>
                <div className='info'>
                    <h3>5.5</h3>
                    <small>Height</small>
                </div>
                <div className='info'>
                    <h3>23<small>yr</small></h3>
                    <small>Year</small>
                </div>

            </div>


            {/* break section */}

            <h3>Add A Break</h3>
            <div className='info-container'>
                <div className='time'>
                    <h5 onClick={() => addBreakTime(80)} >80s</h5>
                </div>
                <div className='time'>
                    <h5 onClick={() => addBreakTime(90)}>90s</h5>
                </div>
                <div className='time'>
                    <h5 onClick={() => addBreakTime(50)}>50s</h5>
                </div>
                <div className='time'>
                    <h5 onClick={() => addBreakTime(60)}>60s</h5>
                </div>
                <div className='time'>
                    <h5 onClick={() => addBreakTime(45)}>45s</h5>
                </div>
            </div>

            {/* Exercise Details  */}

            <h3>Exercise Details</h3>
            <div className='details'>
                <div>
                    <h5>Exercise time</h5>
                </div>
                <div>
                    <h4>{totalTime} s</h4>
                </div>
            </div>
            <div className='details'>
                <div>
                    <h5>Break time</h5>
                </div>
                <div>
                    <h4> {breakTime} s</h4>
                </div>
            </div>


            <button className='activity-btn'>
                <h3>Activity Completed</h3>
            </button>

        </div>
    );
};

export default Summary;