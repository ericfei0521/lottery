export function setMin(value) {
    return {
        type: 'ADD_MIN',
        payload: value,
    };
}
export function setSec(value) {
    return {
        type: 'ADD_SEC',
        payload: value,
    };
}
