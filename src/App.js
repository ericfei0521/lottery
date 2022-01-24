import { Provider } from 'react-redux';
import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div>123456789</div>
            </div>
        </Provider>
    );
}

export default App;
