import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCandidate } from '../action';

const CandidateList = () => {
    const state = useSelector((state) => state.HandleCandidate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCandidate(9));
    }, []);
    console.log(state);

    if (state.length <= 0) return null;

    return (
        <div>
            {state.map((item, index) => {
                return <div key={index}>{item}</div>;
            })}
        </div>
    );
};

export default CandidateList;
