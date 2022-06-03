import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LangProvider } from './Context/ContextLanguage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LangProvider><App /></LangProvider>
        
);
