import React from 'react';

const Sidebar = () => {
  const sidebarWidth = '10%';
  const imageWidth = '90%';

  return (
    <div style={{ backgroundColor: "white", width: sidebarWidth, height: "100vh", }}>
      <img src="./Logo-Luna-bunt.png" alt="logo" style={{ width: imageWidth }} />
      <div>Sidebar</div>
    </div>
  );
};

export default Sidebar;
