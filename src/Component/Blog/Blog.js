import React from 'react';

const Blog = () => {

    return (
        <div className='lg:space-y-10 space-y-5 lg:w-8/12 w-11/12 mx-auto lg:my-14 my-10'>
            <div className='border-2 border-cyan-300 bg-cyan-50 rounded-md lg:p-20 p-5'>
                <h1 className='text-2xl mb-5 font-medium'>What is the purpose of react router?</h1>
                <p>sadaron vabe dui dhorener website dekha jay multipage website ar single page website.router diye muloto single page application ba website toiri kora hoy ar er onnek sunbidha royeche jemon eita te amdr page bar bar loading ney na jar fole amdr load hote somoy kom lage internet khoroc kom hoy ar user bebohar koreo sacchondo bodh kore</p>
            </div>
            <div className='border-2 border-cyan-300 bg-cyan-50 rounded-md lg:p-20 p-5 '>
                <h1 className='text-2xl mb-5 font-medium'>How dose context api works?</h1>
                <p>Context api react er akti component eitar subidha hocce normali amra data pass korse seta props akare pass kori ar seta water fall er moto nicer dike jay . jar fole amra jokhon kono component er children er modde data pass korte cai tokhon sei component er jodi onnek gulo children theke tahole porita children ke props akre data pass korte hoy but context api er maddome amra golabe e vabe data trasfer korte pari oi context er vite children hisabe jarde ke rakha hobe tara sobai sei data ti pabe tar jonno kono props use korte hobe na sora sori data nite parbe.</p>
            </div>
            <div className='border-2 border-cyan-300 bg-cyan-50 rounded-md lg:p-20 p-5 '>
                <h1 className='text-2xl mb-5 font-medium'>what is useRef</h1>
                <p>useRef eita muloto useState er moto eitar default manti hocce mutable tai amra eitar man notun kore set korte pari pori borton o korte pari caile amra eta ke couter hisab e bebohar korte pari useState er sathe bebohar kore jemon stop watch . muloto sobce basi jono prio hocce ei jonno eita react er modde onno je kono attribuit er theke basi karjokori karo eita diya apnr dom er modde theke je koto children ke apni niya aste parben eitar maddome tarpor apni eita diya onnek kaj korte parben apni caile ref er mantio chage kore dite parben.</p>
            </div>
        </div>
    );
};

export default Blog;