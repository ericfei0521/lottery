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
        if (candidateRef?.current?.value) {
            regenNum = candidateRef.current.value;
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
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;
        gap: 15px;
        max-height: 400px;
        overflow-y: auto;
    }
    .card {
        width: 18%;
        height: 100px;
        background-color: rgba(1, 1, 1, 0.8);
        color: white;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            text-align: center;
        }
    }

    input {
        background-color: transparent;
        width: 70%;
        min-width: 300px;
        padding: 5px;
        font-size: 30px;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 5px solid black;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        text-align: center;
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
        .setter {
            flex-direction: column;
        }
        .list {
            gap: 10px;
        }
        .card {
            width: 30%;
        }
        button {
            width: 100%;
        }
    }
    @media (max-width: 350px) {
        .list {
            gap: 5px;
        }
        .card {
            width: 45%;
        }
    }
`;
