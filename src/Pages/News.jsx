import React from 'react';
import Container from '../Components/Container';
import useTitle from '../Hooks/useTitle';

const News = () => {
    useTitle("News");
    return (
        <div>
             <Container>
                <h2 className='text-3xl font-bold text-center my-5'>This is News Page</h2>
            </Container>
        </div>
    );
};

export default News;