import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import QuizTopics from '../QuizTopics/QuizTopics';


const Home = () => {
    const { data } = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-4 grid-cols-1 lg:mx-20 mx-5 gap-8 pb-10'>
                {data.map(topics => <QuizTopics key={topics.id} topics={topics}></QuizTopics>)}
            </div>
        </div>
    );
};

export default Home;