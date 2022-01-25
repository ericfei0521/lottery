import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer } from '../action';
import styled from 'styled-components';

const Timmer = ({ className }) => {
    const minRef = useRef(null);
    const secRef = useRef(null);
    const dispatch = useDispatch();
    const setTime = () => {
        const newMin = minRef.current.value || 0;
        const newSec = secRef.current.value || 0;
        dispatch(setTimer({ min: newMin, sec: newSec }));
    };

    return (
        <div className={className}>
            <input type="number" min="0" placeholder="00" ref={minRef} />
            <span className="dot">:</span>
            <input type="number" min="0" placeholder="00" ref={secRef} />
            <button onClick={setTime}>Enter</button>
        </div>
    );
};

export default styled(Timmer)`
    width: 60%;
    max-width: 1200px;
    align-self: center;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 60px auto 20px;
    border-bottom: 3px solid black;
    padding-bottom: 20px;
    .dot {
        font-size: 60px;
    }
    input {
        background-color: transparent;
        width: 35%;
        min-width: 100px;
        padding: 5px;
        font-size: 3em;
        border: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        text-align: center;
    }
    input:focus {
        outline: none;
    }
    button {
        width: 35%;
        min-width: 120px;
        font-size: 30px;
        border-radius: 10px;
        border: none;
        background-color: blue;
        color: white;
        box-shadow: 0px 0px 5px black;
        cursor: pointer;
    }
    button:active {
        transform: scale(0.9);
    }
    @media (max-width: 990px) {
        input {
            width: 30%;
            min-width: 60px;
        }
        button {
            width: 100%;
            height: 60px;
        }
        flex-wrap: wrap;
    }
`;
