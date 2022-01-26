import { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { LotteryContext } from '../providers/LotteryProvider';

const TimmerCountDown = ({ className }) => {
    const state = useSelector((state) => state.HandleTimmer);
    const [isStart, setIsStart] = useState(false);
    const [remainTime, setRemainTime] = useState({ min: 0, sec: 0 });
    const { setIsFinalCountDown } = useContext(LotteryContext);

    const ticker = (min, sec) => {
        let newTime = { min: min, sec: sec };
        if (min !== 0 && sec === 0) {
            newTime.sec = 60;
            newTime.min = newTime.min -= 1;
        }
        newTime.sec = newTime.sec -= 1;
        if (parseInt(newTime.sec) === 0 && parseInt(newTime.min) === 0) {
            newTime.sec = '0';
            newTime.min = '0';
            setIsStart(false);
            setRemainTime({ ...newTime });
            setIsFinalCountDown(true);
            return;
        }
        if (parseInt(newTime.sec) === 0) {
            if (parseInt(newTime.min) !== 0) {
                newTime.min = newTime.min -= 1;
            }
            newTime.sec = 60;
        }
        setRemainTime({ ...newTime });
    };
    useEffect(() => {
        const newRemain = { min: parseInt(state.min), sec: parseInt(state.sec) };
        setIsStart(false);
        setRemainTime({ ...newRemain });
    }, [state]);

    useEffect(() => {
        if (!isStart) return;
        let remainMin = parseInt(remainTime.min);
        let remainSec = parseInt(remainTime.sec);
        if (remainMin === 0 && remainSec === 0) return;
        const countDown = setInterval(() => ticker(remainMin, remainSec), 1000);
        return function cleanUp() {
            clearInterval(countDown);
        };
    }, [remainTime, isStart]);

    return (
        <div className={className}>
            <div className="countdown-display">
                <span className="time">{remainTime.min > 9 ? remainTime.min : `0${remainTime.min}`}</span>
                <span>:</span>
                <span className="time">{remainTime.sec > 9 ? remainTime.sec : `0${remainTime.sec}`}</span>
            </div>
            <div className="buttons">
                <button
                    onClick={() => {
                        setIsStart(true);
                        setIsFinalCountDown(false);
                    }}
                >
                    Start
                </button>
                <button
                    onClick={() => {
                        setIsStart(false);
                        setIsFinalCountDown(false);
                    }}
                >
                    Stop
                </button>
            </div>
        </div>
    );
};

export default styled(TimmerCountDown)`
    width: 60%;
    max-width: 1200px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-bottom: 3px solid black;
    padding-bottom: 20px;
    .countdown-display {
        font-size: 60px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        width: 70%;
        gap: 10px;
        .time {
            width: 120px;
        }
        span {
            width: 60px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            letter-spacing: 5px;
        }
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
    button {
        width: 100px;
        font-size: 30px;
        height: 60px;
        border-radius: 10px;
        border: none;
        background-color: #59b95b;
        color: white;
        box-shadow: 0px 0px 5px gray;
        cursor: pointer;
    }
    button:nth-child(2) {
        background-color: #c03634;
    }
    button:active {
        transform: scale(0.9);
    }
    @media (max-width: 990px) {
        flex-direction: column;
        width: 70%;

        .countdown-display {
            width: 100%;
        }
        .buttons {
            width: 100%;
        }
        button {
            width: 50%;
        }
    }
    @media (max-width: 350px) {
        width: 80%;
    }
`;
