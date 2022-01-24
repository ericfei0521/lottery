import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer } from '../action';

const Timmer = () => {
    const minRef = useRef(null);
    const secRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.HandleTimmer);
    const setTime = () => {
        const newMin = minRef.current.value || 0;
        const newSec = secRef.current.value || 0;
        dispatch(setTimer({ min: newMin, sec: newSec }));
    };
    return (
        <div>
            <input type="number" min="0" placeholder="please enter min" ref={minRef} />
            <input type="number" min="0" placeholder="please enter second" ref={secRef} />
            <button onClick={setTime}>Enter</button>
            <span>{state.min > 9 ? state.min : `0${state.min}`}</span>
            <span>:</span>
            <span>{state.sec > 9 ? state.sec : `0${state.sec}`}</span>
        </div>
    );
};

export default Timmer;
