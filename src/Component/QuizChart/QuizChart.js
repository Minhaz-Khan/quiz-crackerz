import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const QuizChart = () => {
    const { data } = useLoaderData();


    return (
        <div className='lg:h-[600px] h-[400px] lg:w-[600px] w-[370px] lg:mx-auto mt-10'>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default QuizChart;