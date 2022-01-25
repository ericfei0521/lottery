import styled from 'styled-components';

const Loader = styled.div`
    #circle {
        height: 10vw;
        width: 10vw;
        border: 2px transparent solid;
        border-top: 2px green solid;
        border-radius: 50%;
        -webkit-animation: spin2 1s infinite linear;
        animation: spin2 1s infinite linear;
    }

    @-webkit-keyframes spin2 {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
    @keyframes spin2 {
        from {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
`;
const LoadSpinner = () => {
    return (
        <Loader>
            <div id="circle"></div>
        </Loader>
    );
};

export default LoadSpinner;
