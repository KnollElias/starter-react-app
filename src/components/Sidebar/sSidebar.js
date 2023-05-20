const styles = {
  link: {
    textDecoration: 'none',
  },
  sidebarElement: {
    marginTop: "10px",
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-start", 
    width: "100%", 
    borderRadius: 12.5, 
    height: "50px",
  },
  logoImage: {
    width: "30px", 
    height: "30px", 
    margin: "10px",
  },
  text: {
    margin: "10px",
  },
  borderContainer: {
    display: "flex",
    width: '100%', 
    height: "100vh", 
  },
  border: {
    flex: '0 0 10%', 
    backgroundColor: 'white',
  },
  sidebar: {
    flex: '0 0 80%',  // Adjusted from 60% to 80%
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },  
  logoSidebar: {
    marginTop: "50px",
    marginBottom: "50px",
    width: '100%',
  },
  footer: {
    marginBottom: 50/2,
    backgroundColor: "transparent",
  }
};

module.exports = styles;
