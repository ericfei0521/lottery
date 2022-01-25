import { useContext } from 'react';
import { LotteryContext } from '../providers/LotteryProvider';
import styled from 'styled-components';

const Winner = ({ className }) => {
    const { winner } = useContext(LotteryContext);
    return (
        <div className={className}>
            <div className="winner-card">{winner ? `Winner is ${winner}` : 'please click start'}</div>
        </div>
    );
};

export default styled(Winner)`
    width: 60%;
    max-width: 1200px;
    background-color: rgba(1, 1, 1, 0.8);
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    .winner-card {
        text-align: center;
        font-size: 3rem;
        color: white;
        font-weight: bolder;
    }
`;
