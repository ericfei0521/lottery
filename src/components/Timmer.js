import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Timmer = () => {
    const state = useSelector((state) => state.HandleTimmer);

    return (
        <div>
            <span>{state.min}</span>
            <span>:</span>
            <span>{state.sec}</span>
        </div>
    );
};

export default Timmer;
