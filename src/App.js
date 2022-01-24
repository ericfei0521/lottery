import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
const Timmer = React.lazy(() => import('./components/TimmerSetter'));
const TimmerCountDown = React.lazy(() => import('./components/TimmerCountDown'));
const CandidateList = React.lazy(() => import('./components/CandidateList'));

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Suspense
                    fallback={() => {
                        return <div>wip</div>;
                    }}
                >
                    <Timmer />
                    <TimmerCountDown />
                    <CandidateList />
                </Suspense>
            </div>
        </Provider>
    );
}

export default App;
