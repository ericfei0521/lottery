import { useContext } from 'react';
import { LotteryContext } from '../providers/LotteryProvider';
import styled from 'styled-components';

const Winner = ({ className }) => {
    const { winner } = useContext(LotteryContext);
    return (
        <div className={className}>
            {winner && <div>Winner is</div>}
            <div>{winner ? winner : 'please click start'}</div>
        </div>
    );
};

export default styled(Winner)`
    width: 60%;
    max-width: 1200px;
    background-color: rgba(1, 1, 1, 0.8);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: white;
    font-weight: bolder;
    text-align: center;
    position: relative;
    img {
        position: absolute;
        right: 25px;
        top: 25px;
        width: 20px;
        display: none;
    }
    @media (max-width: 990px) {
        width: 70%;
    }
    @media (max-width: 350px) {
        width: 80%;
    }
`;
