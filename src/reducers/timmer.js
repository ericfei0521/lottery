const initTime = {
    min: 0,
    sec: 30,
};

const HandleTimmer = (state = initTime, action) => {
    switch (action.type) {
        case 'ADD_MIN': {
            const newTime = { min: action.payload, sec: initTime.sec };
            return newTime;
        }
        case 'ADD_SEC': {
            let newMin = initTime.min;
            let newSec = initTime.sec;
            if (action.payload / 60 > 1) {
                newMin += Math.floor(action.payload / 60);
                newSec = action.payload % 60;
            }
            const newTime = { min: newMin, sec: newSec };
            return newTime;
        }
        default:
            return state;
    }
};

export default HandleTimmer;
