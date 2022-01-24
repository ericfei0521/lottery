const HandleTimmer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TIMER': {
            let newMin = action.payload.min;
            let newSec = action.payload.sec;
            if (action.payload.sec / 60 > 1) {
                newMin += Math.floor(action.payload.sec / 60);
                newSec = action.payload.sec % 60;
            }
            const newTime = { min: newMin, sec: newSec };
            return newTime;
        }
        default:
            return state;
    }
};

export default HandleTimmer;
