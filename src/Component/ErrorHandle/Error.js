import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    console.log(error);
    return (
        <div>
            <h1>Oppss Somthing is wrong</h1>
            {error && <div>
                <p>{error.status}</p>
                <p>{error.statusText}</p>
            </div>
            }

        </div>
    );
};

export default Error;