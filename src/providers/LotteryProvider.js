import { useState, useMemo, createContext } from 'react';
import { useSelector } from 'react-redux';
import { randomPicker } from '../helper';
export const LotteryContext = createContext({});

const LotteryProvider = ({ children }) => {
    const [isFinalCountDown, setIsFinalCountDown] = useState(false);
    const [winner, setWinner] = useState(null);
    const state = useSelector((state) => state.HandleCandidate);

    useMemo(() => {
        if (!isFinalCountDown) return;
        const selectIndex = randomPicker(state.length);
        setWinner(state[selectIndex]);
    }, [isFinalCountDown]);

    return (
        <LotteryContext.Provider value={{ isFinalCountDown, setIsFinalCountDown, winner }}>
            {children}
        </LotteryContext.Provider>
    );
};
export default LotteryProvider;
