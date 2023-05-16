import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

import Login from './screens/Login/Login';
import Cockpit from './screens/Cockpit/Cockpit';
import Profile from './screens/Profile/Profile';
import Speiseplan from './screens/Speiseplan/Speiseplan';
import Dienstplan from './screens/Dienstplan/Dienstplan';
import Pinnwand from './screens/Pinnwand/Pinnwand';
import Ueber from './screens/Ueber/Ueber';
// import Logout from './screens/Logout/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cockpit" element={<Cockpit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/speiseplan" element={<Speiseplan />} />
            <Route path="/dienstplan" element={<Dienstplan />} />
            <Route path="/pinnwand" element={<Pinnwand />} />
            <Route path="/ueber" element={<Ueber />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
