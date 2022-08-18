import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/main.css';
import ErrorPage from './pages/ErrorPage';
import SignInPage from './pages/SignInPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/:userId" element={<UserPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);