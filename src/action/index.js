export function setTimer(value) {
    return {
        type: 'SET_TIMER',
        payload: value,
    };
}
export function setCandidate(value) {
    return {
        type: 'SET_CANDIDATE',
        payload: value,
    };
}
