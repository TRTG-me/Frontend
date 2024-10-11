import React from 'react';
import Home from './components/home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/login';
import PrivateRoute from './utils/router/privateRoute';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="Login" element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
