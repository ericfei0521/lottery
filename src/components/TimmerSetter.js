import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer } from '../action';

const Timmer = () => {
    const minRef = useRef(null);
    const secRef = useRef(null);
    const dispatch = useDispatch();
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
        </div>
    );
};

export default Timmer;
