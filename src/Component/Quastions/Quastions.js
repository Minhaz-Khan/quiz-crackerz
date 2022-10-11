import React, { createContext, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
export const Markscontext = createContext('hello')

const Quastions = () => {
    const { data } = useLoaderData();
    const { questions, name } = data;
    const [correct, setCorrec] = useState(0);
    const [wrong, setWrong] = useState(0);
    const handleQuizMarks = (isCorrect) => {
        if (isCorrect) {
            setCorrec(correct + 1);
        }
        else {
            setWrong(wrong + 1)
        }
    }
    return (
        <Markscontext.Provider value={handleQuizMarks}>
            <div className='my-10 grid grid-cols-12'>
                <div className='col-span-9'>
                    <h1 className='text-3xl text-center mb-10'>Quiz of {name}</h1>
                    <div className='grid grid-cols-1 mx-auto gap-10 lg:w-6/12 w-full'>
                        {questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}
                    </div>
                </div>
                <div className='col-span-3 h-96 bg-slate-200 p-10'>
                    <div className='my-auto'>
                        <h3 className='text-3xl '>Correct Answer:{correct}</h3>
                        <h3 className='text-3xl '>Wrong Answer:{wrong}</h3>
                    </div>
                </div>
            </div>
        </Markscontext.Provider>
    );
};

export default Quastions;