import { Box, Paper } from "@mui/material";
import React from "react";
import { TopRatingsCard } from "../feedback/TopRatingsCard";

export const TopRatings: React.FC = () => {
  return (
    <Paper
      elevation={1}
      sx={{
        width: "600px",
        height: "235px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "24px",
        borderRadius: "8px",
      }}
    >
      <TopRatingsCard />
      <TopRatingsCard />
      <TopRatingsCard />
      <TopRatingsCard />
    </Paper>
  );
};
