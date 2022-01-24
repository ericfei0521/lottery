import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimer } from '../action';

const Timmer = () => {
    const minRef = useRef(null);
    const secRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.HandleTimmer);
    const setTime = () => {
        console.log(minRef.current.value);
        dispatch(setTimer({ min: minRef.current.value, sec: secRef.current.value }));
    };
    return (
        <div>
            <input placeholder="please enter min" ref={minRef} />
            <input placeholder="please enter second" ref={secRef} />
            <button onClick={setTime}>Enter</button>
            <span>{state.min > 0 ? state.min : `0${state.min}`}</span>
            <span>:</span>
            <span>{state.sec > 0 ? state.sec : `0${state.sec}`}</span>
        </div>
    );
};

export default Timmer;
