import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './redux/redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import './styles/main.css';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/profile" element={<UserPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);