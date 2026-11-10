import React from 'react';import {createRoot} from 'react-dom/client';import {HashRouter} from 'react-router-dom';
import './styles/legacy.css';import './styles/index.css';
import App from './App.jsx';import {LangProvider} from './context/LangContext.jsx';import {StoreProvider} from './context/StoreContext.jsx';
createRoot(document.getElementById('root')).render(<HashRouter><LangProvider><StoreProvider><App/></StoreProvider></LangProvider></HashRouter>);
