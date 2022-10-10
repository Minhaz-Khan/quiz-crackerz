import React from 'react';
import bannerImg from '../../img/1662667753884.jfif'

const Header = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h1>High quality and fun <span className='text-sky-500'>team</span></h1>
                <h1><span className='text-sky-500'>programming contests</span> for</h1>
                <h1>everyone</h1>
                <p>TeamsCode aims to spread computer science education to high school students by organizing online contests where students work on quality competitive programming problems in a team setting.</p>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Header;