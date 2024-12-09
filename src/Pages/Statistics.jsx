import React from 'react';
import { Helmet } from 'react-helmet-async';
import SharedComponent from '../components/SharedComponent';

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Statistics</title>
            </Helmet>
            <SharedComponent title={'Statistics'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></SharedComponent>>
        </div>
    );
};

export default Statistics;