import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from './store/store';
import LotteryProvider from './providers/LotteryProvider';
import LoadSpinner from './components/Loader';

const Timmer = React.lazy(() => import('./components/TimmerSetter'));
const TimmerCountDown = React.lazy(() => import('./components/TimmerCountDown'));
const CandidateList = React.lazy(() => import('./components/CandidateList'));
const Winner = React.lazy(() => import('./components/Winner'));
const Template = styled.div`
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(1, 1, 1, 0.2);
    backdrop-filter: blur(5px);
`;
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Suspense fallback={<LoadSpinner />}>
                    <Template>
                        <Timmer />
                        <LotteryProvider>
                            <TimmerCountDown />
                            <CandidateList />
                            <Winner />
                        </LotteryProvider>
                    </Template>
                </Suspense>
            </div>
        </Provider>
    );
}

export default App;
