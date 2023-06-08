import { CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

function Content({ phoneNumber, emergencyNumber, postAddress, email, title }) {
    return (
        <>
            <CardHeader title={title}></CardHeader>

            <CardContent sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Typography variant="body2" color="text.secondary">
                    {phoneNumber || ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {emergencyNumber || ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {postAddress || ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {email || ""}
                </Typography>
            </CardContent>
        </>
    );
}

export default React.memo(Content);