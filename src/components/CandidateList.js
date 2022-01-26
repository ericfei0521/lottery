import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCandidate } from '../action';
import styled from 'styled-components';

const CandidateList = ({ className }) => {
    const state = useSelector((state) => state.HandleCandidate);
    const candidateRef = useRef(null);
    const dispatch = useDispatch();
    const regenenerateCandidate = () => {
        let regenNum = 9;
        if (candidateRef?.current?.value && candidateRef?.current?.value > 0 && candidateRef?.current?.value <= 12) {
            regenNum = candidateRef.current.value;
        } else {
            alert('Candidate number must between 1 to 12 ');
            candidateRef.current.value = 0;
            return;
        }
        dispatch(setCandidate(regenNum));
    };
    useEffect(() => {
        dispatch(setCandidate(10));
    }, []);

    if (state.length <= 0) return null;

    return (
        <div className={className}>
            <div className="setter">
                <input type="number" min="0" placeholder="Candidate Number" ref={candidateRef} />
                <button onClick={regenenerateCandidate}>Regenerate</button>
            </div>

            <div className="list">
                {state.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default styled(CandidateList)`
    width: 60%;
    max-width: 1200px;
    align-self: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    flex-direction: column;
    height: fit-content;
    border-bottom: 3px solid black;
    margin-bottom: 1em;
    .setter {
        align-self: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .list {
        width: 100%;
        display: grid;
        height: fit-content;
        margin: 0 auto;
        gap: 15px;
        grid-template-columns: repeat(4, 1fr);
        overflow-y: auto;
        align-self: center;
    }
    .card {
        width: 100%;
        height: 100px;
        background-color: rgba(1, 1, 1, 0.8);
        color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 0.8em;
            padding: 0 5px;
            text-align: center;
        }
    }

    input {
        background-color: transparent;
        width: 70%;
        min-width: 300px;
        padding: 5px;
        font-size: 2em;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 5px solid black;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        text-align: center;
        margin-bottom: 20px;
    }
    input:focus {
        outline: none;
    }
    button {
        width: 30%;
        min-width: 150px;
        font-size: 1.5em;
        height: 60px;
        border-radius: 5px;
        border: none;
        background-color: #59b95b;
        color: white;
        box-shadow: 0px 0px 5px gray;
        cursor: pointer;
    }
    button:active {
        transform: scale(0.9);
    }
    @media (max-width: 990px) {
        width: 70%;
        .setter {
            flex-direction: column;
        }
        .list {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }

        button {
            width: 100%;
        }
    }
    @media (max-width: 350px) {
        width: 80%;
        .list {
            grid-template-columns: repeat(2, 1fr);
            gap: 3px;
        }
    }
`;
