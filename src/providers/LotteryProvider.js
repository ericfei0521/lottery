import { useState, createContext } from 'react';
export const LotteryContext = createContext({});

const LotteryProvider = ({ children }) => {
    const [isFinalCountDown, setIsFinalCountDown] = useState(false);
    return (
        <LotteryContext.Provider value={{ isFinalCountDown, setIsFinalCountDown }}>{children}</LotteryContext.Provider>
    );
};
export default LotteryProvider;
