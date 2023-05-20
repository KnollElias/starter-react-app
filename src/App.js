import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

import Login from './screens/Login/Login';
import Cockpit from './screens/Cockpit/Cockpit';
import Profile from './screens/Profile/Profile';
import Speiseplan from './screens/Speiseplan/Speiseplan';
import Dienstplan from './screens/Dienstplan/Dienstplan';
import Pinnwand from './screens/Pinnwand/Pinnwand';
import Ueber from './screens/Ueber/Ueber';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<MainRoutes />} />
      </Routes>
    </Router>
  );
}

function MainRoutes() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/login' ? (
        <>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <Header />
            <Routes>
              <Route path="/cockpit" element={<Cockpit />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/speiseplan" element={<Speiseplan />} />
              <Route path="/dienstplan" element={<Dienstplan />} />
              <Route path="/pinnwand" element={<Pinnwand />} />
              <Route path="/ueber" element={<Ueber />} />
              {/* <Route path="/logout" element={<Logout />} /> */}
              <Route path="*" element={<Navigate to="/cockpit" />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/cockpit" element={<Cockpit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/speiseplan" element={<Speiseplan />} />
          <Route path="/dienstplan" element={<Dienstplan />} />
          <Route path="/pinnwand" element={<Pinnwand />} />
          <Route path="/ueber" element={<Ueber />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="*" element={<Navigate to="/cockpit" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
