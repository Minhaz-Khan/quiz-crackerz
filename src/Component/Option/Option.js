import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {
    const notify = (isCorrect) => toast(isCorrect);
    const [countAns, setCountAns] = useState(0);
    const [color, setColor] = useState(false);
    const checkingRightAns = (Option) => {
        if (Option) {
            if (Option === correctAnswer) {
                notify('Correct Anwser')
            }
            else {
                notify('Wrong Answer')
            }
        }
    }

    return (
        <div className='cursor-pointer border-2 h-24 flex justify-center items-center' onClick={() => checkingRightAns(option)}>
            <li className='text-lg'>{option}</li>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Option;