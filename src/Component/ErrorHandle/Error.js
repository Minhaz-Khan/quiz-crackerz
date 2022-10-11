import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className=' m-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] space-y-10'>

            <h1 className='text-4xl text-center'>Oppss Somthing is wrong</h1>
            {error && <div>
                <p className='text-red-500 text-center text-lg'>{error.statusText || error.message}</p>
                <p className='text-center text-xl'>{error.status}</p>
            </div>
            }


        </div>
    );
};

export default Error;