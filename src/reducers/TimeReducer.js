const initTime = {
    min: 0,
    sec: 30,
};

const HandleTimmer = (state = initTime, action) => {
    switch (action.type) {
        case 'SET_TIMER': {
            let newMin = parseInt(action.payload.min);
            let newSec = parseInt(action.payload.sec);
            if (newSec / 60 > 1) {
                newMin += Math.floor(action.payload.sec / 60);
                newSec = newSec % 60;
            }
            const newTime = { min: newMin, sec: newSec };
            return newTime;
        }
        default:
            return state;
    }
};

export default HandleTimmer;
