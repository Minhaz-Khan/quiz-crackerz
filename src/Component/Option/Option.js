import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Markscontext } from '../Quastions/Quastions';

const Option = ({ option, correctAnswer }) => {
    const handleQuizMarks = useContext(Markscontext);
    const notify = (isCorrect) => toast(isCorrect);
    const [color, setColor] = useState('');
    const checkingRightAns = (Option) => {
        if (Option) {
            setColor('')
            if (Option === correctAnswer) {
                notify('Correct Anwser')
                setColor(!color)
                handleQuizMarks(true)
                setColor('true')
            }
            else {
                notify('Wrong Answer')
                handleQuizMarks(!true)
                setColor('false')

            }
        }
    }

    return (
        <div className={`cursor-pointer border-2 hover:bg-green-400 duration-700 border-cyan-200 h-24 flex justify-center items-center ${color === 'true' && 'text-green-500 border-green-600 '
            }`} onClick={() => checkingRightAns(option)}>
            <p className='text-lg'>{option}</p>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Option;