import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import OnRamp from './app/Views/OnRamp';
import Menu  from './app/Views/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OffRamp from './app/Views/OffRamp';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>

    <App />
  </StrictMode>
);
