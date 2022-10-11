import React from 'react';
import bannerImg from '../../img/1662667753884.jfif'
import { Player } from '@lottiefiles/react-lottie-player';

const Header = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 pt-10'>
            <div className='lg:ml-20 my-auto lg:mx-0 mx-6'>
                <h1 className=' md:text-6xl text-5xl font-bold'>High quality and fun <span className='text-green-600'>team</span></h1>
                <h1 className='md:text-6xl text-5xl font-bold'><span className='text-green-600'>programming contests</span> for</h1>
                <h1 className='md:text-6xl text-5xl font-bold'>everyone</h1>
                <p className='text-2xl mt-12'>TeamsCode aims to spread computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting.</p>
            </div>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://assets7.lottiefiles.com/packages/lf20_ayopewsc.json"
                    style={{ height: '600px', width: '800px' }}
                >
                </Player>
            </div>
        </div>
    );
};

export default Header;