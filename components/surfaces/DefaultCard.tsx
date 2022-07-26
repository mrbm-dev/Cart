import React, { useState } from "react";
import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Image from "next/image";

export const DefaultCard: React.FC = () => {
  const [value, setValue] = useState<number | null>(2);
  return (
    <Paper sx={{ maxWidth: "315px", height: "410px", margin: "0 12px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: " 5px 10px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "24px",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "#E3364E",
            color: "#fff",
            padding: "0 8px",
            borderRadius: "16px",
          }}
        >
          <Typography sx={{ fontSize: "10px" }}>25%</Typography>
          <Typography sx={{ fontSize: "10px" }}>off</Typography>
        </Box>
        <Avatar
          sx={{
            backgroundColor: "#fff",
            fontSize: "16px",
            width: "32px",
            height: "32px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
        </Avatar>
      </Box>
      <Box>
        <Image width="290px" height="290px" src="/image/flash-3.webp" />
      </Box>
      <Box
        sx={{
          padding: "0 16px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#373F50",
              cursor: "pointer",
            }}
          >
            IPhone 13 Pro Max
          </Typography>
          <Rating value={value} readOnly size="medium" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography
            variant="caption"
            sx={{ fontSize: "14px", fontWeight: 600, color: "#D23F57" }}
          >
            $108.00
          </Typography>
          <Typography
            variant="overline"
            sx={{
              textDecorationLine: "line-through",
              fontSize: "14px",
              fontWeight: 600,
              color: "#7D879C",
            }}
          >
            150.00
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
