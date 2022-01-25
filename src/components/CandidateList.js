import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCandidate } from '../action';

const CandidateList = () => {
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
        dispatch(setCandidate(9));
    }, []);

    if (state.length <= 0) return null;

    return (
        <div>
            <input type="number" min="0" placeholder="please enter candidates number" ref={candidateRef} />
            <button onClick={regenenerateCandidate}>Regenerate</button>
            {state.map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </div>
    );
};

export default CandidateList;
