import React from 'react';
import useTitle from '../Hooks/useTitle';

const ErrorPage = () => {
    useTitle("Error 404");
    return (
        <div>
            <h1>Error 404: Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;