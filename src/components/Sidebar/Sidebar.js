import React from 'react';

const Sidebar = () => {
  const sidebarWidth = '90%';
  const imageWidth = '100%';

  return (
    <div style={{ backgroundColor: "white", width: sidebarWidth, height: "100vh", }}>
      <img src="./Logo-Luna-bunt.png" alt="logo" style={{ width: imageWidth }} />
      <div>Cockpit</div>
      <div>Profile</div>
      <div>Speiseplan</div>
      <div>Dienstplan</div>
      <div>Pinnwand</div>
      <div>Über Kita Luna</div>
    </div>
  );
};

export default Sidebar;
