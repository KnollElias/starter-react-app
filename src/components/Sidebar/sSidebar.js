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
    flex: '0 0 20%', 
    backgroundColor: 'white',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // adjust this as needed
    justifyContent: 'space-between', // added this to create space between main content and footer
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
