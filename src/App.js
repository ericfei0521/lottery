import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
const Timmer = React.lazy(() => import('./components/Timmer'));

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
                </Suspense>
            </div>
        </Provider>
    );
}

export default App;
