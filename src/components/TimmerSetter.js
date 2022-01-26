import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setTimer } from '../action';
import styled from 'styled-components';

const Timmer = ({ className }) => {
    const minRef = useRef(null);
    const secRef = useRef(null);
    const dispatch = useDispatch();
    const alertValue = (e) => {
        if (e.target.value > 99) {
            e.target.value = 99;
            alert('maximum value is 99');
        }
        if (e.target.value < 0) {
            e.target.value = 0;
            alert('minimun value is 0');
        }
    };
    const setTime = () => {
        const newMin = minRef.current.value || 0;
        const newSec = secRef.current.value || 0;
        if (newMin < 0 || newSec < 0) {
            alert('minumum value is 0');
            return;
        }
        if (newMin > 99 || newSec > 99) {
            alert('maximum value is 99');
            return;
        }
        dispatch(setTimer({ min: newMin, sec: newSec }));
    };

    return (
        <div className={className}>
            <div className="setter">
                <input type="number" min="0" max="999" placeholder="00" ref={minRef} onChange={alertValue} />
                <div className="dot">
                    <div className="dots"></div>
                    <div className="dots"></div>
                </div>
                <input type="number" min="0" max="999" placeholder="00" ref={secRef} onChange={alertValue} />
            </div>

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
    margin: 20px auto 20px;
    border-bottom: 3px solid black;
    padding-bottom: 20px;
    .setter {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        height: 65px;
        width: 70%;
    }
    .dot {
        justify-self: center;
        width: fit-content;
        height: 65px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }
    .dots {
        width: 10px;
        height: 10px;
        background-color: black;
        border-radius: 50%;
    }
    input {
        background-color: transparent;
        height: 65px;
        font-size: 3em;
        border: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        text-align: center;
        justify-self: center;
    }
    input:focus {
        outline: none;
    }
    button {
        width: 30%;
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
        width: 70%;
        .setter {
            width: 100%;
        }
        button {
            width: 100%;
            height: 60px;
        }
        flex-wrap: wrap;
    }
    @media (max-width: 500px) {
        input {
            font-size: 2.5em;
        }
    }
    @media (max-width: 375px) {
        width: 80%;
        input {
            font-size: 2em;
        }
        .dots {
            width: 5px;
            height: 5px;
        }
    }
`;
