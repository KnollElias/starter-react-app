import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const sidebarWidth = '90%';
  const imageWidth = '100%';

  const SidebarElement = (props) => {
    const isSelected = location.pathname === props.to;
    return (
      <Link to={props.to} style={{ textDecoration: 'none' }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", height: "50px", backgroundColor: isSelected ? "red" : "white" }}>
          <img src={props.img} alt="logo" style={{ width: "30px", height: "30px", margin: "10px" }} />
          <div style={{ margin: "10px", color: isSelected ? "white" : "black" }}>{props.text}</div>
        </div>
      </Link>
    );
  };

  return (
    <div style={{ backgroundColor: "transparent", width: sidebarWidth, height: "100vh", marginLeft: "5%" }}>
      <img src="./assets/Logo-Luna-bunt.png" alt="logo" style={{ width: imageWidth }} />
      <br />
      
      <SidebarElement to="/cockpit" img={"./assets/sidebar/Cockpit.png"} text={"Cockpit"} />
      <SidebarElement to="/profile" img={"./assets/sidebar/Profile.png"} text={"Profile"} />
      <SidebarElement to="/speiseplan" img={"./assets/sidebar/Speiseplan.png"} text={"Speiseplan"} />
      <SidebarElement to="/dienstplan" img={"./assets/sidebar/Dienstplan.png"} text={"Dienstplan"} />
      <SidebarElement to="/pinnwand" img={"./assets/sidebar/Pinnwand.png"} text={"Pinnwand"} />
      <SidebarElement to="/ueber" img={"./assets/sidebar/Cockpit.png"} text={"Über Kita Luna"} />
      <SidebarElement to="/logout" img={"./assets/sidebar/Logout.png"} text={"Log Out"} />
    </div>
  );
};

export default Sidebar;
