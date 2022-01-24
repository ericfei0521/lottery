import randomNameGenerator from '../helper';
const HandleCandidate = (state = [], action) => {
    switch (action.type) {
        case 'SET_CANDIDATE': {
            let candidateList = [];
            const candidateCount = action.payload;
            for (let i = 0; i < candidateCount; i++) {
                candidateList.push(randomNameGenerator());
            }

            return [...candidateList];
        }
        default:
            return state;
    }
};

export default HandleCandidate;
