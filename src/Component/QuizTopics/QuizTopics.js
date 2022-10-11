import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const QuizTopics = ({ topics }) => {
    const { id, logo, name, total } = topics;
    const navigate = useNavigate()
    const handleQuizButton = () => {
        navigate(`/Quizes/${id}`)
    }
    return (
        <div className='bg-blue-100 rounded-t-md border-2 drop-shadow-xl'>
            <img src={logo} alt="" className='hover:scale-105 duration-700 ease-in-out p-3' />
            <div className='p-4 flex justify-between bg-white'>
                <div>
                    <h4 className='text-xl'>Topic Name: <span className='font-medium'>{name}</span></h4>
                    <p>Quastion:{total}</p>
                </div>
                <button onClick={handleQuizButton} className='px-5 py-3 bg-green-200 rounded-md text-lg font-medium hover:bg-green-500 duration-700'>Start Practice</button>
            </div>
        </div>
    );
};

export default QuizTopics;