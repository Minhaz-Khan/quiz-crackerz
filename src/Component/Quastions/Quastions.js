import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Quiz from '../Quiz/Quiz';

const Quastions = () => {
    const { data } = useLoaderData();
    const { questions, name } = data;

    return (
        <div className='my-10 '>
            <ToastContainer />
            <h1 className='text-3xl text-center'>Quiz of {name}</h1>
            <div className='grid grid-cols-1 mx-auto gap-10 w-6/12'>
                {questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
            </div>
        </div>
    );
};

export default Quastions;