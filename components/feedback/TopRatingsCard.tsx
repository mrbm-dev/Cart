import { Box, Paper, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const TopRatingsCard: React.FC = () => {
  const [value, setValue] = useState<number | null>(4);

  return (
    <Box
      sx={{
        width: "150px",
        height: "235px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        margin: "8px",
      }}
    >
      <Box
        sx={{
          width: "118px",
          height: "118px",
          display: "flex",
          zIndex: 10,
          position: "relative",
          alignItems: "center",
        }}
      >
        <Image
          layout="fill"
          src="/image/camera.png"
          style={{ borderRadius: "10px" }}
        />
        <Box
          sx={{
            zIndex: 20,
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.25)",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "7px",
          cursor: "pointer",
        }}
      >
        <Box sx={{ display: "flex", gap: "3px" }}>
          <Rating readOnly value={value} size="small" />
          <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
            (49)
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: 600 }}>
          Camera
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: "14px", fontWeight: 600, color: "#D23F57" }}
        >
          $3.300
        </Typography>
      </Box>
    </Box>
  );
};
