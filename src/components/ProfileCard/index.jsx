import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function ProfileCard({name, phone, email}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "22rem",
        borderRadius: "1rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "1.3rem 3rem;",
        marginTop: '1rem'
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://source.unsplash.com/random/?w=800&h=400"
        sx={{ width: "5rem", height: "5rem" }}
      />
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{phone} </Typography>
        <Typography>{email} </Typography>
      </CardContent>
    </Card>
  );
}
