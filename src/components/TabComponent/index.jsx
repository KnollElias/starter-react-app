import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function TabComponent({ value, handleChange, tabs }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {tabs.map(({ label, tab }) => (
          <Tab label={label} value={tab} />
        ))}
      </Tabs>
    </Box>
  );
}
export default TabComponent;
