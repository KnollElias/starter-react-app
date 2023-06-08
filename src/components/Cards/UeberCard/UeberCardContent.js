import React from "react";

//MUI Components
import { CardContent, CardHeader, Typography } from "@mui/material";
//MUI Icons
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

function Content({ phoneNumber, emergencyNumber, postAddress, email, title }) {
  return (
    <>
      <CardHeader title={title}></CardHeader>

      <CardContent sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Typography variant="body2" color="text.secondary">
          <PhoneIcon /> {phoneNumber || ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <PhoneIcon /> {emergencyNumber || ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <HomeIcon /> {postAddress || ""}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <EmailIcon /> {email || ""}
        </Typography>
      </CardContent>
    </>
  );
}

export default React.memo(Content);
