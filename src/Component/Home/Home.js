import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';


const Home = () => {
    const quizTopics = useLoaderData();
    console.log(quizTopics.data);
    return (
        <div>
            <Header></Header>

        </div>
    );
};

export default Home;