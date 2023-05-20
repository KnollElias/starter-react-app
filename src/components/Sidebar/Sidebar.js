import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './sSidebar.js';

const Sidebar = () => {
  const location = useLocation();

  const SidebarElement = (props) => {
    const isSelected = location.pathname === props.to;
    return (
      <Link to={props.to} style={styles.link}>
        <div style={{...styles.sidebarElement, backgroundColor: isSelected ? "#BFB7A2" : "white"}}>
          <img src={props.img} alt="logo" style={styles.logoImage} />
          <div style={{...styles.text, color: isSelected ? "white" : "black"}}>{props.text}</div>
        </div>
      </Link>
    );
  };

  return (
    <div style={styles.borderContainer}>
      <div style={styles.border}></div>
      <div style={styles.sidebar}>
        <div style={styles.mainContent}>
            <Link to="/cockpit">
                <img src="./assets/Logo-Luna-bunt.png" alt="logo" style={styles.logoSidebar} />
            </Link>
            <br />

            <SidebarElement to="/cockpit" img={"./assets/sidebar/Cockpit.png"} text={"Cockpit"} />
            <SidebarElement to="/profile" img={"./assets/sidebar/Profile.png"} text={"Profile"} />
            <SidebarElement to="/speiseplan" img={"./assets/sidebar/Speiseplan.png"} text={"Speiseplan"} />
            <SidebarElement to="/dienstplan" img={"./assets/sidebar/Dienstplan.png"} text={"Dienstplan"} />
            <SidebarElement to="/pinnwand" img={"./assets/sidebar/Pinnwand.png"} text={"Pinnwand"} />
            <SidebarElement to="/ueber" img={"./assets/sidebar/Cockpit.png"} text={"Über Kita Luna"} />
        </div>
        <div style={styles.footer}>
            <SidebarElement to="/login" img={"./assets/sidebar/Logout.png"} text={"Log Out"} last={true} />
        </div>
    </div>
      <div style={styles.border}></div>
    </div>
  );
};

export default Sidebar;