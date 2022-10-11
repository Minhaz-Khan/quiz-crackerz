import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const { data } = useLoaderData();
    const { questions, name } = data;
    console.log(questions, name);

    return (
        <div>
            <h1 className='text-3xl text-center'>Quiz of {name}</h1>
            { }
        </div>
    );
};

export default Quizes;