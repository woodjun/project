import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

export let globalRoot = null

globalRoot = ReactDOM.createRoot(document.getElementById('root'));

/**
 * react-redux必须利用Provider将store暴露给容器组件
 */
globalRoot.render(
    <Provider store={store}>
        <App></App>
    </Provider>
);