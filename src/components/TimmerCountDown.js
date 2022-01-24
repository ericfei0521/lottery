import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TimmerCountDown = () => {
    const state = useSelector((state) => state.HandleTimmer);
    const [isStart, setIsStart] = useState(false);
    const [remainTime, setRemainTime] = useState({ min: '00', sec: '00' });
    const ticker = (min, sec) => {
        let newTime = { min: min, sec: sec };
        newTime.sec = newTime.sec -= 1;
        if (parseInt(newTime.sec) === 0 && parseInt(newTime.min) === 0) {
            newTime.sec = '0';
            newTime.min = '0';
            setIsStart(false);
            setRemainTime({ ...newTime });
            return;
        }
        if (parseInt(newTime.sec) === 0) {
            if (parseInt(newTime.min) !== 0) {
                newTime.min = newTime.min -= 1;
            }
            newTime.sec = '60';
        }
        setRemainTime({ ...newTime });
    };
    useEffect(() => {
        const newRemain = { min: String(state.min), sec: String(state.sec) };
        setIsStart(false);
        setRemainTime({ ...newRemain });
    }, [state]);

    useEffect(() => {
        if (!isStart) return;
        let remainMin = parseInt(remainTime.min);
        let remainSec = parseInt(remainTime.sec);
        const countDown = setInterval(() => ticker(remainMin, remainSec), 1000);
        return function cleanUp() {
            clearInterval(countDown);
        };
    }, [remainTime, isStart]);

    return (
        <div>
            <span>{remainTime.min > 9 ? remainTime.min : `0${remainTime.min}`}</span>
            <span>:</span>
            <span>{remainTime.sec > 9 ? remainTime.sec : `0${remainTime.sec}`}</span>
            <button
                onClick={() => {
                    setIsStart(true);
                }}
            >
                Start
            </button>
        </div>
    );
};

export default TimmerCountDown;
