import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store'

// function render(state) {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App state={state} />
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }

// render(store.getState())

// store.subscribe(() => {
//     console.log(store.getState())
//     render(store.getState())
// })

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

window.store = store