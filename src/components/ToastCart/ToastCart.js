import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastCart.css';




const ToastCart = () => {
    const showToast = () => {
        toast('Congratulation to complete your Exercise !!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }



    return (
        <div className='toast'>
            <button onClick={() => showToast()} className='activity-btn'>

                <h3>Activity Completed</h3>
                <ToastContainer />
            </button>
        </div>
    );
};

export default ToastCart;