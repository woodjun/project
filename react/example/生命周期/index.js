import ReactDOM from 'react-dom/client';
import App from './App';

export let globalRoot = null

globalRoot = ReactDOM.createRoot(document.getElementById('root'));
globalRoot.render(<App></App>);